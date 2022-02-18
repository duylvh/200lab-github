import * as React from "react";
import { FileZipOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

type RepoHeaderProps = {
  title: React.ReactNode;
  actions?: React.ReactElement | React.ReactElement[];
};

const ActionWrapper: React.FC = ({ children }) => (
  <div className="flex items-center gap-2">{children}</div>
);

const RepoHeader: React.FC<RepoHeaderProps> = ({ title, actions }) => {
  const Wrapper = Array.isArray(actions) ? ActionWrapper : React.Fragment;

  return (
    <Row align="middle" className="p-4">
      <Col span={16}>
        <div className="items-center inline-flex">
          <FileZipOutlined className="text-[1.5rem] mr-2" />
          <Typography.Title level={2} className="!mb-0">
            {title}
          </Typography.Title>
        </div>
      </Col>
      <Col span={8} className="flex justify-end">
        <Wrapper>{actions}</Wrapper>
      </Col>
    </Row>
  );
};

export default RepoHeader;
