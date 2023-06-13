import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Signup from "@/components/sign/Signup";

const SignUp = () => {
  const { t } = useTranslation("common");

  return <Signup />;
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default SignUp;
