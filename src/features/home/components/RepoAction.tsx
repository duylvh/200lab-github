import * as React from "react";
import cx from "clsx";
import { Button, ButtonProps, Divider } from "antd";

type RepoActionProps = {
  actionTitle?: string;
  actionCount?: number;
  containerClassName?: string;
};

const RepoAction: React.FC<RepoActionProps & ButtonProps> = ({
  actionTitle,
  actionCount,
  className,
  containerClassName,
  ...rest
}) => {
  return (
    <div
      className={cx(
        containerClassName,
        "rounded-md inline-flex items-center bg-[#1f1f1f] hover:brightness-125 transition duration-500 ease-in-out border-solid border-[0.25px] border-neutral-700 px-3 py-0.25"
      )}
    >
      <Button
        {...rest}
        type="text"
        className={cx(
          className,
          "p-0 inline-flex items-center leading-[0] !bg-transparent font-medium"
        )}
      >
        {actionTitle}
      </Button>
      <Divider type="vertical" className="h-full" />
      <span className="text-white font-medium">{actionCount}</span>
    </div>
  );
};

export default RepoAction;
