import React from "react";
import Signin from "@/components/sign/Signin";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const SignIn = () => {
  const { t } = useTranslation("common");

  return <Signin />;
};

export async function getServerSideProps({ locale = "ar" }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default SignIn;
