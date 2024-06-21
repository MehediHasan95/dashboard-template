import { Button, Card, Col, Flex, Input, Row, Typography } from "antd";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import Iconify from "../IconifyConfig/IconifyConfig";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./Container.css";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../app/features/modalSlice";

interface Props {
  headerTitle: string;
  content: React.ReactNode;
  buttonLabel?: string;
  showButton?: boolean;
  setSearch?: Dispatch<SetStateAction<string>>;
  additionalContent?: React.ReactNode;
}

const Container: React.FC<Props> = ({
  headerTitle,
  content,
  buttonLabel = "Create",
  showButton = true,
  setSearch,
  additionalContent,
}) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>
        <Flex align="center" justify="space-between" gap={8}>
          <Typography.Text className="container-header-title">
            {headerTitle}
          </Typography.Text>
          {showButton && (
            <Button
              onClick={() => dispatch(toggleModal())}
              icon={<Iconify name="ant-design:plus-outlined" />}
              type="primary"
            >
              {buttonLabel}
            </Button>
          )}
        </Flex>

        <BreadCrumb />

        <Row gutter={[10, 10]}>
          <Col span={24} lg={4}>
            <Input
              allowClear
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearch && setSearch(e.target.value)
              }
              prefix={<Iconify name="lucide:search" />}
              placeholder="Search..."
            />
          </Col>
          <Col span={24} lg={20}>
            <Flex align="center" justify="end" gap={8}>
              {additionalContent}
              <Button
                type="text"
                icon={<Iconify name="clarity:filter-line" width={18} />}
              />
            </Flex>
          </Col>
        </Row>
        <br />
        <Card size="small">{content}</Card>
      </div>
    </React.Fragment>
  );
};

export default Container;
