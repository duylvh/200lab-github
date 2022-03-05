import * as React from "react";
import { FileZipOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

type RepoHeaderProps = {
  title: React.ReactNode;
  actions?: React.ReactNode;
};

const RepoHeader: React.FC<RepoHeaderProps> = ({ title, actions }) => {
  return (
    <Row align="middle" className="p-4">
      <Col span={16} className="items-center inline-flex">
        <FileZipOutlined className="text-[1.5rem] mr-2" />
        <Typography.Title level={2} className="!mb-0">
          {title}
        </Typography.Title>
      </Col>
      <Col span={8} className="inline-flex gap-4 justify-end">
        {actions}
      </Col>
    </Row>
  );
};

export default RepoHeader;
