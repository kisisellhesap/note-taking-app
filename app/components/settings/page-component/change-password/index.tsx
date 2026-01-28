import Button from "@/app/components/button";
import { EyeIcon } from "@/app/components/icons/icons";
import Input from "@/app/components/input";

const ChangePassword = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-preset-3 text-Neutral-950 dark:text-white">Change Password</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          label={"Old Password"}
          value=""
          leftIcon={<EyeIcon className="w-5 h-5" />}
          rightIcon={<EyeIcon className="w-5 h-5" />}
          onChange={() => {}}
        />
        <Input
          label={"New Password"}
          value=""
          leftIcon={<EyeIcon className="w-5 h-5" />}
          rightIcon={<EyeIcon className="w-5 h-5" />}
          onChange={() => {}}
          infoText={"At least 8 characters"}
        />
        <Input
          label={"Confirm New Password"}
          value=""
          leftIcon={<EyeIcon className="w-5 h-5" />}
          rightIcon={<EyeIcon className="w-5 h-5" />}
          onChange={() => {}}
        />
      </div>
      <div className="ml-auto">
        <Button type="primary" text={"Save Password"} />
      </div>
    </div>
  );
};

export default ChangePassword;
