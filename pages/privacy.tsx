import Link from "next/link";
import cn from "services/cn";
import { MENUS } from "config/constants";
import React, { useState } from "react";
import MobileMenu from "components/Header/MobileMenu";
import { chromeStoreExtURL } from "config/config";

export const HeaderContent: React.FC<{ content: string }> = ({ content }) => {
  return <h2 className="font-bold text-[40px] leading-[3.5rem]">{content}</h2>;
};
export const ContentContainer: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
};

const Privacy = () => {
  const [showMobile, setShowMobile] = useState(false);
  const toggleMobile = () => {
    setShowMobile(!showMobile);
    if (showMobile) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <section className="bg-white pb-12">
      <div className="container">
        <div className="flex flex-col justify-center">
          <header
            className={cn(
              "white top-0 left-0 right-0 w-full py-5 lg:py-7 xl:py-10"
            )}
          >
            <div className="w-full xs:px-13 flex items-center">
              <Link href="/">
                <a className="block">
                  <img
                    src={"/svgs/logo.svg"}
                    alt="logo"
                    className="max-w-[105px] md:max-w-[155px]"
                  />
                </a>
              </Link>

              <div className="hidden lg:flex items-center justify-center flex-1 gap-x-10">
                {MENUS.map((menu, idx) => {
                  if (menu.external) {
                    return (
                      <a
                        href={menu.external}
                        key={idx}
                        target="_blank"
                        rel="noreferrer"
                        className=" py-2 block font-medium font-caption duration-150 hover:text-primary-200"
                      >
                        {menu.name}
                      </a>
                    );
                  }

                  if (menu.href) {
                    return (
                      <Link href={menu.href} key={idx}>
                        <a
                          onClick={(e) => {
                            if (menu.href === "/#roadmap") {
                              e.preventDefault();
                            }
                          }}
                          className=" py-2 block font-medium font-caption duration-150 hover:text-primary-200"
                        >
                          {menu.name}
                        </a>
                      </Link>
                    );
                  }

                  return null;
                })}
              </div>

              <div className="relative ml-auto flex items-center gap-6">
                <a
                  href={chromeStoreExtURL}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-block px-6 py-[14px] bg-[#007EFB] text-white font-medium rounded-[34px]"
                >
                  Download
                </a>

                <div
                  className={`block lg:hidden text-black hambuger-black ${
                    showMobile ? "is-active" : ""
                  }`}
                  onClick={toggleMobile}
                >
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <MobileMenu isShow={showMobile} />
          </header>
          <div className="flex flex-col gap-16 font-medium leading-6 pt-[32px]">
            <ContentContainer>
              <p className="text-[16px]">Effective date: May 28th, 2022</p>
              <p className="pt-[16px]">
                Fewcha Technologies, Inc. (“we”, “us” or “our”) values your
                privacy. In this Privacy Policy (“Policy”), we describe how we
                collect, use, and disclose information that we obtain about
                visitors to our website at https://fewcha.app (the “Site”) and
                the services available through our Site, including any mobile
                applications and browser extensions (collectively, the
                “Services”), and how we use and disclose that information.
              </p>
              <p className="pt-[16px]">
                By visiting the Site, or using any of our Services, you agree
                that your personal information will be handled as described in
                this Policy. Your use of our Site or Services, and any dispute
                over privacy, is subject to this Policy (including any
                applicable changes) and an applicable Terms of Use, including
                its applicable limitations on damages and provisions for the
                resolution of disputes.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"OVERVIEW"} />
              <p className="pt-[16px]">
                Fewcha is a wallet app that works on the Aptos Layer 1
                Blockchain ecosystem. In order to make it easier for users to
                access Aptos ecosystem when participating in Aptos DApps. Fewcha
                wallet also makes it easier for you to manage and secure your
                crypto assets with our service.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"PRIVACY"} />
              <p className="pt-[16px]">
                Fewcha's services will absolutely not ask for cookies from users
                participating in the Fewcha Wallet platform. Fewcha values
                users' information and does not collect any data to use for any
                other purpose for third parties. If you see items that require
                your browser's cookies, please email us at{" "}
                {
                  <p className="inline-block text-blue-600">
                    community@fewcha.app
                  </p>
                }
                .
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"THIRD PARTY LINKS"} />
              <p className="pt-[16px]">
                Our priority is to help users have a friendly Fewcha experience
                and always help users avoid annoying links from third parties
                and inability to work on the Fewcha Wallet platform. We respect
                the user experience, if you see links appearing on the Fewcha
                platform, please contact us via email:{" "}
                {
                  <p className="inline-block text-blue-600">
                    community@fewcha.app
                  </p>
                }
                .
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent
                content={
                  "CONDITIONS OF USE, NOTICES, CHANGES AND UPDATES TO PRIVACY NOTICE"
                }
              />
              <p className="pt-[16px]">
                If you choose to use Fewcha Wallet, your use and any dispute
                over privacy is subject to this Notice and our Terms of Use. If
                you have any concerns about privacy at Fewcha Wallet, please
                contact us with a complete description, and we will try to
                resolve it. We reserve the right to update and revise this
                Privacy Policy at any time. We occasionally review this Privacy
                Notice to make sure it complies with applicable laws and
                conforms to changes in our business. Please review this Privacy
                Notice regularly to ensure that you are aware of its terms. Any
                use of Fewcha Wallet after an amendment to our Privacy Notice
                constitutes your acceptance to the revised or amended terms.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"QUESTIONS"} />
              <p className="pt-[16px]">
                We are very pleased when you send feedback or questions when
                using the service, please send it at this address to receive the
                earliest response from Fewcha team.
              </p>
            </ContentContainer>
            <ContentContainer>
              <p className="pt-[16px]">community@fewcha.app</p>
            </ContentContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
