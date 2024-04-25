import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import { deleteUser, searchUsers } from '@/services/ant-design-pro/api';
import { Button, Divider, Image, Popconfirm, Space, Typography } from 'antd';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';
import { message } from 'antd/es';

/**
 *  删除节点
 * @param selectedRows
 */
// @ts-ignore
const doDelete = async (selectedRows: API.CurrentUser[], actionRef) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const result = await deleteUser({
      id: selectedRows.find((row) => row.id)?.id || 0,
    });
    if (result.code === 0) {
      message.success('操作成功');
      // 在删除成功后重新加载用户列表数据
      if (actionRef.current) {
        actionRef.current.reload();
      }
    } else {
      message.error(result.description);
    }
  } catch (e: any) {
    message.error('操作失败，' + e.message);
  } finally {
    hide();
  }
};

/**
 * 用户管理页面
 * @constructor
 */
const AdminUserPage: React.FC<unknown> = () => {
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  // @ts-ignore
  const [updateData, setUpdateData] = useState<API.CurrentUser>({});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.CurrentUser>[] = [
    {
      title: '序号',
      dataIndex: 'id',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      copyable: true,
    },
    {
      title: '账号',
      dataIndex: 'userAccount',
      copyable: true,
    },
    {
      title: '头像',
      dataIndex: 'avatarUrl',
      render: (_, record) => (
        <div>
          <Image src={record.avatarUrl} width={100} />
        </div>
      ),
    },
    {
      title: '性别',
      dataIndex: 'gender',
      valueEnum: {
        0: { text: '男' },
        1: { text: '女' },
      },
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      copyable: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      copyable: true,
    },
    {
      title: '星球编号',
      dataIndex: 'planetCode',
      copyable: true,
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
      valueEnum: {
        0: { text: '正常' },
        1: { text: '停用' },
      },
    },
    {
      title: '角色',
      dataIndex: 'userRole',
      valueType: 'select',
      valueEnum: {
        0: { text: '普通用户', status: 'default' },
        1: { text: '管理员', status: 'Success' },
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      copyable: true,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <Space key={record.id} split={<Divider type="vertical" />}>
          <Typography.Link
            key={record.id + '-modify'}
            onClick={() => {
              setUpdateData(record);
              setUpdateModalVisible(true);
            }}
          >
            修改
          </Typography.Link>
          <Popconfirm
            key={record.id + '-delete'}
            title="您确定要删除么？"
            onConfirm={() => doDelete([record], actionRef)}
            okText="确认"
            cancelText="取消"
          >
            <Typography.Link key={record.id + '-delete-link'} type="danger">
              删除
            </Typography.Link>
          </Popconfirm>
        </Space>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.CurrentUser>
        headerTitle="用户管理"
        columns={columns}
        actionRef={actionRef}
        // @ts-ignore
        request={async (params, sort, filter) => {
          console.log(sort, filter);
          //await waitTime(2000);
          const userList = await searchUsers();
          return {
            data: userList,
          };
        }}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        search={{
          layout: 'vertical',
          defaultCollapsed: false,
        }}
        dateFormatter="string"
        toolbar={{
          title: '用户列表',
          tooltip: '',
        }}
        toolBarRender={() => [
          <Button key="1" type="primary" onClick={() => setCreateModalVisible(true)}>
            添加用户
          </Button>,
        ]}
      />
      <CreateModal
        modalVisible={createModalVisible}
        columns={columns}
        onSubmit={() => setCreateModalVisible(false)}
        onCancel={() => setCreateModalVisible(false)}
      />
      <UpdateModal
        oldData={updateData}
        modalVisible={updateModalVisible}
        columns={columns}
        onSubmit={() => setUpdateModalVisible(false)}
        onCancel={() => setUpdateModalVisible(false)}
      />
    </PageContainer>
  );
};
export default AdminUserPage;
