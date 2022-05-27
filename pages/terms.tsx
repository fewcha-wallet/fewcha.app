import React, { useState } from "react";
import Link from "next/link";
import cn from "services/cn";
import { MENUS } from "config/constants";
import MobileMenu from "components/Header/MobileMenu";
import { chromeStoreExtURL } from "config/config";
import { ContentContainer, HeaderContent } from "./privacy";

const Terms = () => {
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
              <p className="text-[16px]">Effective Date: May 26, 2022</p>
              <p className="pt-[16px]">
                Fewcha Technologies, Inc. ("Fewcha", the "Company", "we", "us"
                or "our") is a blockchain development company focused on
                utilizing decentralized technologies such as the Solana
                blockchain. Fewcha hosts a top level domain website,{" "}
                {
                  <Link className="inline-block" href="https://fewcha.app/">
                    <a className="text-blue-600 underline decoration-solid">
                      https://fewcha.app/
                    </a>
                  </Link>
                }{" "}
                that provides information regarding Fewcha and its service
                offerings, as well as sub-domains for Fewcha's product offerings
                (collectively, the "Site"), which includes text, images, audio,
                code and other materials and third party information.
              </p>
              <p className="pt-[16px]">
                Fewcha makes available to certain users certain software
                services, including Fewcha's unhosted wallet application and
                browser extension (the "Wallet" or the "App"). The Wallet
                enables users to (i) store locally on their own devices, tokens,
                cryptocurrencies and other crypto or blockchain-based digital
                assets (collectively, "Digital Assets"); (ii) link to
                decentralized applications, including, without limitation,
                decentralized exchanges (collectively "Dapp(s)"); (iii) from the
                App user interface, swap assets on a peer-to-peer basis via
                third-party Dapps ("Swapper"); (iv) view addresses and
                information that are part of digital asset networks and
                broadcast transactions; and (v) additional functionality as may
                be added to the App from time to time (collectively the
                "Services").
              </p>
              <p className="pt-[16px]">
                These Terms of Service (these "Terms" or this "Agreement") (i)
                contain the terms and conditions that govern your access to and
                use of the Site and Services and (ii) constitute a legally
                binding agreement between us and you and/or the entity you
                represent ("you", "your" or "user").
              </p>
              <p className="pt-[16px]">
                ARBITRATION NOTICE: THESE TERMS CONTAIN AN ARBITRATION CLAUSE
                FOR USERS IN THE UNITED STATES AND CANADA, WHICH PROVISION IS
                CONTAINED BELOW UNDER THE HEADING "DISPUTE RESOLUTION". IF YOU
                ARE LOCATED IN THE UNITED STATES OR CANADA, YOU AGREE THAT
                DISPUTES BETWEEN YOU AND Fewcha WILL BE RESOLVED BY BINDING,
                INDIVIDUAL ARBITRATION, AND YOU WAIVE YOUR RIGHT TO A TRIAL BY
                JURY OR TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY
                PURPORTED CLASS ACTION OR OTHER REPRESENTATIVE PROCEEDING.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Agreement to Terms, Privacy Policy"} />
              <p className="pt-[16px]">
                Please read these Terms carefully before using the Site or
                Services. By using or accessing the Site, Services and/or
                Content (defined below) in any manner, or clicking a button or
                checkbox to accept or agree to these Terms where that option is
                made available you, (i) accept and agree to these Terms and (ii)
                consent to the collection, use, disclosure and other handling of
                information as described in our Privacy Policy, available at{" "}
                {
                  <Link
                    className="inline-block"
                    href="https://fewcha.app/privacy"
                  >
                    <a className="text-blue-600 underline decoration-solid">
                      https://fewcha.app/privacy
                    </a>
                  </Link>
                }{" "}
                (the "Privacy Policy"). The Privacy Policy is incorporated
                herein by this reference in its entirety, and all references
                herein to the "Terms of Service", the "Terms" or this
                "Agreement", include a reference to the Privacy Policy.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent
                content={"Changes to Terms or Services, Third-Party Services"}
              />
              <p className="pt-[16px]">
                We may modify the Terms at any time at our sole discretion. If
                we do so, we'll notify you either by posting the modified Terms
                on the Site, by providing you a notice through the App, or
                through other methods of communication which we deem reasonable.
                It's important that you review the Terms whenever we modify
                them, because, if you continue to use the Site or Services after
                we have modified the Terms, you are agreeing to be legally
                bound, and to abide, by the modified Terms.
              </p>
              <p className="pt-[16px]">
                If you don't agree to be bound by the modified Terms, then you
                may not use the Site or Services. Because our Services are
                evolving over time we may change or discontinue all or any part
                of the Site or Services, at any time and without notice, in our
                sole and absolute discretion.
              </p>
              <p className="pt-[16px]">
                When you use our Site and/or Services, you may also be using the
                services of one or more third parties. For example, the Swapper
                relies on exchanges operated by third persons, and obtaining the
                Fewcha Wallet browser extension requires access to the Google
                Chrome webstore. Your use of those and other third-party
                services ("Third-Party Services") will be subject to the privacy
                policies, terms of use and similar policies and terms, and fees
                of those third party services.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Who May Use the Services"} />
              <p className="pt-[16px]">Eligibility</p>
              <p className="pt-[16px]">
                <ul className="flex flex-col gap-4 list-inside list-disc">
                  <p>
                    You may use the Services if you are of the age of majority
                    in your jurisdiction of residence, or older, and are not
                    barred from using the Services under applicable law. By
                    using the Site or Services and agreeing to these Terms, you
                    represent and warrant that:
                  </p>
                  <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                    You are of lawful age, and are lawfully able, to enter into
                    contracts. If you are entering into this Agreement for an
                    entity, such as the company you work for, you represent and
                    warrant that you have legal authority to bind that entity to
                    these Terms.
                  </li>
                  <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                    Neither you nor any person that owns or controls you is
                    subject to sanctions or otherwise designated on any list of
                    prohibited or restricted parties, including but not limited
                    to the lists maintained by the United Nations Security
                    Council, the U.S. Government (e.g., the Specially Designated
                    Nationals List and Foreign Sanctions Evaders List of the
                    U.S. Department of Treasury and the Entity List of the U.S.
                    Department of Commerce), the European Union or its Member
                    States, or other applicable government authority.
                  </li>
                </ul>
                <p className="pt-[16px]">
                  Registration and Your Information; Suspension/Termination of
                  Services; Security
                </p>
                <p className="pt-[16px]">
                  To use certain of the Services, you may be asked to have or to
                  create an account ("Account"). To the extent you create an
                  account, you agree that you won't disclose your Account
                  credentials to anyone and you'll notify us immediately of any
                  unauthorized use of your Account. You're responsible for all
                  activities that occur under your Account, or are otherwise
                  referable to your Account credentials, whether or not you know
                  about them, and you are solely responsible for your conduct,
                  and the tasks and activities you undertake, on or utilizing
                  the Site or Services. We reserve the right to suspend or
                  terminate your Account if you provide inaccurate, untrue, or
                  incomplete information, or if you fail to comply with the
                  Account registration requirements or these Terms. We may
                  suspend or terminate your access to and use of the Site or
                  Services at any time, for any reason, in our sole and absolute
                  discretion, without incurring liability of any kind to you as
                  a result of such suspension or termination.
                </p>
                <p className="pt-[16px]">
                  You acknowledge and understand that, in certain circumstances,
                  such as if you lose or forget your password for your Wallet,
                  you will need to use a recovery phrase to access any
                  cryptocurrency stored in your wallet (the "Recovery Phrase").
                  You are solely responsible for the retention and security of
                  your Recovery Phrase. Your Recovery Phrase is the only way to
                  restore access to the cryptocurrency stored in your Wallet if
                  you lose access to your Wallet. Anyone who knows your Recovery
                  Phrase can access, transfer or spend your cryptocurrency. If
                  you lose your Recovery Phrase, you may not be able to access,
                  transfer or spend your cryptocurrency. You acknowledge and
                  agree that Fewcha does not store and is not responsible in any
                  way for the security of your Recovery Phrase and you agree to
                  hold Fewcha, its affiliates, representatives, agents and
                  personnel harmless and that no such party shall be liable in
                  any way in the event you lose your Recovery Phrase and cannot
                  access, transfer or spend your cryptocurrency. You bear sole
                  responsibility for any loss of your cryptocurrency due to
                  failure to retain and/or secure your Recovery Phrase.
                </p>
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Feedback"} />
              <p className="pt-[16px]">
                We welcome feedback, comments, ideas, and suggestions for
                improvements to the Site and Services ( "Feedback" ). You grant
                to us a non-exclusive, worldwide, perpetual, irrevocable,
                fully-paid, royalty-free, sublicensable and transferable license
                under any and all intellectual property rights that you own or
                control to use, copy, modify, create derivative works based upon
                or improvements with respect to and otherwise exploit and
                commercialize the Feedback and any such derivative works and
                improvements in any manner and for any purpose.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent
                content={"Content Ownership, Responsibility and Removal"}
              />
              <p className="pt-[16px]">
                For purposes of these Terms: (i) "Content" means text, graphics,
                images, music, software, audio, video, works of authorship of
                any kind, and information or other materials that are posted,
                generated, provided or otherwise made available through the Site
                or Services; and (ii) "User Content" means any Content that
                users or Account holders (including you) upload, submit, store,
                send, post or otherwise make available on the App or through our
                Site. Content includes without limitation User Content.
              </p>
              <p className="pt-[16px]">
                We do not claim any ownership rights in any User Content and
                nothing in these Terms will be deemed to restrict any rights
                that you may have to use and exploit your User Content.
              </p>
              <p className="pt-[16px]">
                Subject to the foregoing, Fewcha and its licensors exclusively
                own all right, title and interest in and to the Site, the
                Services and Content, including all associated intellectual
                property rights. You acknowledge that the Site, Services and
                Content are protected by copyright, trademark, and other laws of
                the United States and foreign countries. You agree not to
                remove, alter or obscure any copyright, trademark, service mark
                or other proprietary rights notices incorporated in or
                accompanying the Services or Content.
              </p>
              <p className="pt-[16px]">Rights in User Content Granted by You</p>
              <p className="pt-[16px]">
                You grant us a worldwide, non-exclusive, royalty-free, fully
                paid-up, perpetual, irrevocable, sublicensable, and transferable
                license to use, copy, distribute, create derivative works of,
                publicly display, and publicly perform your User Content,
                subject to the Privacy Policy.
              </p>
              <p className="pt-[16px]">
                You warrant and represent that you have the right and authority
                to submit your User Content and that neither your User Content
                nor any part thereof infringes, misappropriates or otherwise
                violates the intellectual property rights or any other rights of
                any person.
              </p>
              <p className="pt-[16px]">
                You acknowledge that, in certain instances, where you have
                removed your User Content by specifically deleting it, some of
                your User Content (such as posts or comments you make) may not
                be completely removed and copies of your User Content may
                continue to exist on the Services. We are not responsible or
                liable for the removal or deletion of (or the failure to remove
                or delete) any of your User Content.
              </p>
              <p className="pt-[16px]">
                Rights in App, Site and Services Granted by Fewcha
              </p>
              <p className="pt-[16px]">
                The App, Site and Services are proprietary to Fewcha and its
                licensors and must not be used other than strictly in accordance
                with these Terms. Fewcha grants to you a limited, non-exclusive,
                non-transferable, non-sublicensable, fully-revocable right to
                use the App and Site for the purposes of accessing and using the
                Services strictly in accordance with these Terms.
              </p>
              <p className="pt-[16px]">
                You agree not to use the Site or Services in any manner or for
                any purpose other than as expressly permitted by this Agreement.
                Except as expressly authorized, you will not, and will not
                attempt to (i) modify, distribute, alter, tamper with, repair,
                or otherwise create derivative works of any Content included in
                the Services (except to the extent Content included in the
                Services is provided to you under a separate license that
                expressly permits the creation of derivative works), (ii)
                reverse engineer, disassemble, or decompile the App or Site or
                apply any other process or procedure to derive the source code
                of any software included in the App or Site , (iii) access or
                use the Services in a way intended to avoid incurring fees or
                exceeding usage limits or quotas, (iv) use scraping techniques
                to mine or otherwise scrape data, or (v) resell or sublicense
                the Services, or use the Services to provide software as a
                service or any cloud-based, time sharing, service bureau or
                other services. You will not use Our Marks unless you obtain our
                prior written consent. You will not misrepresent or embellish
                the relationship between us and you (including by expressing or
                implying that we sponsor, endorse, or contribute to you or your
                business endeavors). You will not imply any relationship or
                affiliation between us and you. For the purposes of these terms,
                "Our Marks" means any trademarks, service marks, service or
                trade names, logos, trade dress and other designations of
                source, origin, sponsorship, certification or endorsement of
                Fewcha Technologies Inc. or its affiliates or their respective
                licensors.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Fees"} />
              <p className="pt-[16px]">
                We may charge fees for some or part of the Services we make
                available to you, including fees charged on token swaps that you
                execute on third-party exchanges by accessing such exchanges via
                the Swapper. We reserve the right to change those fees at any
                time, in our sole and absolute discretion. We will disclose the
                amount of fees we will charge you for the applicable Service at
                the time that you access the Service. You may view the fees
                currently charged for our Services at{" "}
                {
                  <Link
                    className="inline-block"
                    href="https://fewcha.app/fees."
                  >
                    <a className="text-blue-600 underline decoration-solid">
                      https://fewcha.app/fees.
                    </a>
                  </Link>
                }{" "}
              </p>
              <p className="pt-[16px]">
                You may incur charges from third parties for use of Third-Party
                Services. For example, you may be charged fees via the Dapps
                (including, without limitation, decentralized exchanges) that
                you may access via the App, including via the Swapper. Third
                party fees are not charged by Fewcha and are not paid to Fewcha.
                Under no circumstances shall Fewcha incur any liability, of any
                kind, to you arising from or relating to fees charged to you by
                Third-Party Services linked to or accessed through our Site or
                Services.
              </p>
              <p className="pt-[16px]">
                Although we will attempt to provide accurate fee information,
                any such information reflects our estimate of fees, which may
                vary from the fees actually paid to use the Services and
                interact with the Solana blockchain or any other network with
                which the Services are compatible.
              </p>
              <p className="pt-[16px]">
                In connection with the Swapper, you understand and agree that
                swap rates and prices are estimates only, and that they may
                change at any time. Accordingly, the prices or swap rates
                provided via the Services, including on the Swapper interface,
                are estimates only and may be inaccurate. Fewcha may not be held
                liable for, and you hereby forever release Fewcha from, any
                losses or other liabilities arising from an inaccurate estimate
                of fees provided in connection with any use of the Services.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent
                content={"Acceptable Use and Enforcement Rights"}
              />
              <ul className="flex flex-col gap-4 list-inside list-disc">
                <p>
                  As a condition to using the Site and/or Services, you agree
                  not to use the Site or Services in ways that:
                </p>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Violate, misappropriate, or infringe the rights of Fewcha, our
                  users, or others, including privacy, publicity, intellectual
                  property, or other rights.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Are illegal, obscene, defamatory, threatening, intimidating,
                  harassing, hateful or racially or ethnically offensive, or
                  that instigate or encourage conduct that would be illegal or
                  otherwise inappropriate, including promoting violent crimes.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Involve falsehoods, misrepresentations, or misleading
                  statements, including impersonating someone.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Involve sending illegal or impermissible communications such
                  as bulk messaging, auto-messaging, auto-dialing, and the like.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Avoid, bypass, remove, deactivate, impair, descramble or
                  otherwise circumvent any technological measure implemented by
                  us or any of our service providers or any other third party to
                  protect the Services or Content.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Disguise your location through IP proxying or other methods.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Interfere with, or attempt to interfere with, the access to
                  the Services of any user, host or network, including, without
                  limitation, sending a virus, overloading, flooding, spamming,
                  or mail-bombing the Services.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Circumvent any content-filtering techniques, security measures
                  or access controls that Fewcha employs on the Site or the
                  Services in any manner.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Could interfere with, disrupt, negatively affect or inhibit
                  other users from enjoying the Services, or that could damage,
                  disable, overburden, or impair the functioning of the Site or
                  Services.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Violate any applicable law or regulation, including, without
                  limitation any applicable anti-money laundering and
                  anti-terrorism financing laws and sanctions programs,
                  including, without limitation, the Bank Secrecy Act and those
                  enforced by the U.S. Department of Treasury's Office of
                  Foreign Assets Controls and any other Export Control Laws.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Encourage or enable any other individual to do any of the
                  foregoing.
                </li>
              </ul>
              <ul className="flex flex-col gap-4 list-inside list-disc pt-[16px]">
                <p>
                  By using the Site or Services, you further represent, warrant
                  and covenant that:
                </p>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Any Digital Assets you transfer via the Services have been
                  legally obtained by, and belong to, you.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  You will not provide any false, inaccurate or misleading
                  information while using the Site or Services, or engage in any
                  activity that operates to defraud Fewcha, other users of the
                  Services, or any other person or entity.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  You will not use the Services to transmit or exchange Digital
                  Assets that are the direct or indirect proceeds of any
                  criminal or fraudulent activity, including, without
                  limitation, terrorism or tax evasion.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  Any Digital Assets you use in connection with the Services are
                  either owned by you or you are validly authorized to carry out
                  actions using such assets.
                </li>
                <li className="pl-[12px] md:pl-[24px] lg:pl-[32px]">
                  You will pay all fees necessary for interacting with the
                  Solana blockchain, or any other network with which the
                  Services are compatible, including "gas" costs, as well as all
                  fees charged by us for your use of the Services.
                </li>
              </ul>
              <p className="pt-[16px]">
                Although we have no obligation to monitor any User Content, we
                have absolute discretion to remove User Content at any time and
                for any reason without notice. You understand that by using the
                Services, you may be exposed to User Content that is offensive,
                indecent, or objectionable. We take no responsibility and assume
                no liability for any User Content, including any loss or damage
                to any of your User Content.
              </p>
              <p className="pt-[16px]">
                You agree to comply with all applicable U.S. and non-U.S. export
                control and trade sanctions laws ("Export Laws"). Without
                limiting the foregoing, you may not download the App or use the
                Services if (i) you are in, under the control of, or a national
                or resident of Cuba, Iran, North Korea, Sudan, or Syria or any
                other country subject to United States embargo, UN Security
                Council Resolutions, HM Treasury's financial sanctions regime,
                or if you are on the U.S. Treasury Department's Specially
                Designated Nationals List or the U.S. Commerce Department's
                Denied Persons List, Unverified List, Entity List HM Treasury's
                financial sanctions regime; or (ii) you intend to supply any
                Services to Cuba, Iran, North Korea, Sudan or Syria or any other
                country subject to United States embargo or HM Treasury's
                financial sanctions regime (or a national or resident of one of
                these countries), or to a person on the Specially Designated
                Nationals List, Denied Persons List, Unverified List, Entity
                List, or HM Treasury's financial sanctions regime.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Third Party Services"} />
              <p className="pt-[16px]">
                The Site, Services and App may contain links to Third-Party
                Services (including, without limitation, Dapps), and may
                leverage or plug into such Third Party Services to enable
                certain features, such as the Swapper. When using a Dapp or
                other Third Party Services, you understand that you are at no
                time transferring your assets to us. We provide access to Third
                Party Services only as a convenience, do not have control over
                their content, do not warrant or endorse, and are not
                responsible for the availability or legitimacy of, the content,
                products or services on or accessible from those Third Party
                Services (including any related website, resources or links
                displayed therein). We make no warranties or representations,
                express or implied, about such linked Third Party Services, the
                third parties they are owned and operated by, the information
                contained on them or the suitability of their products or
                services. You acknowledge sole responsibility for and assume all
                risk arising from your use of any third-party website,
                applications, or resources.
              </p>
              <p className="pt-[16px]">
                You may be able to link your Wallet to your accounts on
                third-party platforms, sites and services, to enable access to
                such accounts from your Wallet. In doing so, you understand and
                agree that all transactions made when accessing such accounts
                from your Wallet are subject to these Terms and to the terms of
                use, privacy policies, and other terms, conditions and policies
                imposed by the providers of such third-party sites, services and
                platforms.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Termination"} />
              <p className="pt-[16px]">
                We may terminate this Agreement and/or your access to and use of
                the Site and Services, in our sole discretion, at any time and
                without notice to you. You may cancel your Account, if you have
                one, at any time by removing the Wallet web browser extension
                and ceasing any and all use of the Site, Services and/or
                Content. Upon any termination, discontinuation or cancellation
                of this Agreement, the Services or your Account, (i) all rights
                and/or licenses granted to you under these Terms shall
                immediately cease and terminate and you shall forthwith cease
                the use of and/or access to the App, Site, Services and Content
                in any way whatsoever; and (ii) notwithstanding the foregoing,
                the following provisions will survive: Feedback, Content and
                Content Rights, Content Ownership, Responsibility and Removal
                (except for the subsection "Rights in Content Granted by
                Fewcha"), Termination, Warranty Disclaimers, Indemnity,
                Limitation of Liability, Dispute Resolution, and General Terms.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Termination"} />
              <p className="pt-[16px]">
                YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE SITE AND THE
                SERVICES (INCLUDING ANY PRIVATE KEY STORAGE SERVICE OFFERED AS
                PART OF THE SERVICES, WHETHER CLOUD OR HARDWARE-BASED) AND
                CONTENT IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO
                SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH
                YOU. THE APP, SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND
                "AS AVAILABLE" BASIS WITHOUT ANY REPRESENTATION OR WARRANTY,
                WHETHER EXPRESS, IMPLIED OR STATUTORY. TO THE MAXIMUM EXTENT
                PERMITTED BY APPLICABLE LAW, Fewcha SPECIFICALLY DISCLAIMS ANY
                EXPRESS OR IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. Fewcha DOES
                NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE
                SITE OR SERVICES OR ANY OF THE MATERIALS CONTAINED THEREIN WILL
                BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE. Fewcha DOES
                NOT MAKE ANY REPRESENTATIONS OR WARRANTIES AS TO THE
                FUNCTIONALITY OF THE SOLANA NETWORK, OR THAT SOLANA NETWORK WILL
                OPERATE FREE FROM INTERRUPTIONS, DELAYS, DEFECTS AND/OR ERRORS
                THAT MAY DELAY, HINDER OR PREVENT THE TRANSMISSION OF
                TRANSACTIONS OR MESSAGES TO OR ON THE SOLANA NETWORK, OR ANY
                OTHER NETWORK. THE DURATION OF ANY IMPLIED WARRANTY THAT IS NOT
                EFFECTIVELY DISCLAIMED WILL BE LIMITED TO THE LONGER OF (I)
                THIRTY (30) DAYS FROM THE DATE THAT YOU FIRST USE THE APPLICABLE
                SERVICE AND (II) THE SHORTEST PERIOD ALLOWED UNDER APPLICABLE
                LAW. SOME STATES / JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW
                LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT
                APPLY TO YOU.
              </p>
              <p className="pt-[16px]">
                USE OF ANY PRIVATE KEY STORAGE SERVICE INCLUDED AS PART OF THE
                SERVICES IS OFFERED TO YOU AS A CONVENIENCE, SUBJECT TO THE
                LIMITATIONS ABOVE. TO BE SAFE, YOU SHOULD ALWAYS BACK UP YOUR
                PRIVATE ACCESS KEY VIA SECONDARY MEANS.
              </p>
              <p className="pt-[16px]">
                OUR SERVICES RELY ON EMERGING TECHNOLOGIES, SUCH AS THE SOLANA
                NETWORK AND THIRD PARTY DECENTRALIZED EXCHANGES. SOME SERVICES
                ARE SUBJECT TO INCREASED RISK THROUGH YOUR POTENTIAL MISUSE OF
                THINGS SUCH AS PUBLIC/PRIVATE KEY CRYPTOGRAPHY. BY USING THE
                SERVICES YOU EXPLICITLY ACKNOWLEDGE AND ACCEPT THESE HEIGHTENED
                RISKS. Fewcha SHALL NOT BE LIABLE FOR THE FAILURE OF ANY MESSAGE
                TO SEND TO OR BE RECEIVED BY THE INTENDED RECIPIENT IN THE
                INTENDED FORM, OR FOR DIMINUTION OF VALUE OF SOLANA OR ANY OTHER
                DIGITAL TOKEN OR DIGITAL ASSET ON THE SOLANA NETWORK OR ANY
                OTHER NETWORK, AND Fewcha MAKES NO REPRESENTATIONS OR WARRANTIES
                WITH RESPECT TO THE SAME.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent
                content={"No Professional Advice or Fiduciary Duties"}
              />
              <p className="pt-[16px]">
                All information provided in connection with your access and use
                of the Site and Services should not and may not be construed as
                professional advice. You should not take, and should refrain
                from taking, any action based on any information contained on
                the Site or in the Services, or any other information we make
                available at any time, including, without limitation, blog
                posts, articles, links to third-party content, discord or
                telegram content, news feeds, tutorials, tweets and videos.
                Before you make any financial, legal or other decisions
                involving the Services or use thereof, you should seek
                independent professional advice from an individual who is
                licensed and qualified in the area for which such advice would
                be appropriate. The Terms are not intended to, and do not,
                create or impose any fiduciary duties on us. You further agree
                that the only duties and obligations that we have are expressly
                set out in these Terms (including in the Privacy Policy).
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Indemnity"} />
              <p className="pt-[16px]">
                You will indemnify, defend and hold harmless Fewcha and its
                affiliates and its and their respective officers, directors,
                employees, agents and representatives (the "Fewcha Parties"),
                from and against any claims, disputes, demands, liabilities,
                damages, losses, and costs and expenses, including, without
                limitation, reasonable legal and accounting fees, arising out
                of, relating to or in any way connected with (i) your access to
                or use of the Site, Services or Content, (ii) your User Content,
                (iii) Third Party Services, or (iv) your violation of these
                Terms.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Limitation of Liability"} />
              <p className="pt-[16px]">
                THE Fewcha PARTIES SHALL NOT BE LIABLE UNDER ANY CIRCUMSTANCES
                FOR ANY LOST PROFITS OR ANY SPECIAL, INCIDENTAL, INDIRECT, OR
                CONSEQUENTIAL DAMAGES, WHETHER BASED IN CONTRACT, TORT,
                NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN
                CONNECTION WITH THIS AGREEMENT OR OTHERWISE OUT OF OR IN
                CONNECTION WITH ANY AUTHORIZED OR UNAUTHORIZED USE OF THE SITE,
                THE APP OR THE SERVICES, EVEN IF AN AUTHORIZED REPRESENTATIVE OF
                Fewcha HAS BEEN ADVISED OF OR KNEW OR SHOULD HAVE KNOWN OF THE
                POSSIBILITY OF SUCH DAMAGES. Fewcha SHALL NOT BE LIABLE UNDER
                ANY CIRCUMSTANCES FOR DAMAGES ARISING OUT OF OR IN ANY WAY
                RELATED TO SOFTWARE, PRODUCTS, SERVICES, AND/OR INFORMATION
                OFFERED OR PROVIDED BY THIRD-PARTIES AND ACCESSED THROUGH THE
                APP, SITE OR SERVICES.
              </p>
              <p className="pt-[16px]">
                SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR
                PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO
                THIS LIMITATION MAY NOT APPLY TO YOU. IN NO EVENT SHALL THE
                Fewcha PARTIES' TOTAL LIABILITY TO YOU FOR ALL DAMAGES (OTHER
                THAN AS MAY BE REQUIRED BY APPLICABLE LAW IN CASES INVOLVING
                PERSONAL INJURY) EXCEED THE AMOUNT OF ONE HUNDRED U.S. DOLLARS
                ($USD100.00) OR ITS EQUIVALENT IN THE LOCAL CURRENCY OF THE
                APPLICABLE JURISDICTION.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent
                content={
                  "Acknowledgment of Certain Risks; Other Disclaimers, Release of Claims"
                }
              />
              <p className="pt-[16px]">
                By accessing and using the Services, you represent that you
                understand the inherent risks associated with using
                cryptographic and blockchain-based systems, and that you have a
                working knowledge of the usage and intricacies of Digital
                Assets. You further understand that the markets for these
                Digital Assets are highly volatile due to factors including (but
                not limited to) adoption, speculation, technology, security, and
                regulation. You acknowledge and accept that the cost and speed
                of transacting with cryptographic and blockchain-based systems
                such as Solana are variable and may increase dramatically at any
                time. You further acknowledge and accept the risk that your
                Digital Assets, or any Digital Assets you acquire, including
                through a third-party exchange accessed via the Swapper may lose
                some or all of their value and you may suffer loss due to the
                fluctuation of prices of tokens and/or significant price
                slippage and cost. You understand that anyone can create a
                token, including fake versions of existing tokens and tokens
                that falsely claim to represent projects, and acknowledge and
                accept the risk that you may mistakenly trade those or other
                tokens. You further acknowledge that we are not responsible for
                any of these variables or risks and that we cannot be held
                liable for any resulting losses that you experience while
                accessing or using the Site or Services.
              </p>
              <p className="pt-[16px]">
                The Services and your Digital Assets could be impacted by one or
                more regulatory inquiries or regulatory actions, which could
                impede or limit the ability of Fewcha to continue to make its
                proprietary software, and thus, could impede or limit your
                ability to continue to use the Services.
              </p>
              <p className="pt-[16px]">
                You understand and acknowledge that cryptography is a
                progressing field with advances in code cracking and other
                technical advancements, such as the development of quantum
                computers, which may present risks to Digital Assets and the
                services, and could result in the theft or loss of your Digital
                Assets. To the extent possible, we intend to update
                Fewcha-developed smart contracts related to the Services to
                account for any advances in cryptography and to incorporate
                additional security measures necessary to address risks
                presented from technological advancements, but that intention
                does not reflect a binding commitment and does not in any way
                guarantee or otherwise ensure full security of the Services.
              </p>
              <p className="pt-[16px]">
                You understand that the Solana blockchain (and all other
                networks with which the Services may be compatible) remains
                under development, which creates technological and security
                risks when using the Services in addition to uncertainty
                relating to Digital Assets and transactions therein. You
                acknowledge that the cost of transacting on the Solana
                blockchain is variable and may increase at any time, thereby
                impacting any activities taking place on the Solana blockchain,
                which may result in price fluctuations or increased prices for
                using the Services.
              </p>
              <p className="pt-[16px]">
                You acknowledge that the Services are subject to flaws and that
                you are solely responsible for evaluating any code provided by
                the Site or Services. This warning and others Fewcha provides in
                these Terms in no way evidence or represent any on-going duty to
                alert you of the potential risks of utilizing the Services or
                accessing the Site.
              </p>
              <p className="pt-[16px]">
                Although we intend to provide accurate and timely information on
                the Site and during your use of the Services, that intention
                does not reflect a binding commitment, and the Site and other
                information available when using the Services may not be
                accurate, complete, error-free or current. To continue to
                provide you with as complete and accurate information as
                possible, information may be changed or updated from time to
                time without notice, including, without limitation, information
                regarding our policies. Accordingly, you should verify all
                information before relying on it in any manner, and all
                decisions based on such information contained on the Site or
                made available through the Services are your sole and absolute
                responsibility. No representation of any kind or nature is made
                as to the accuracy, completeness or appropriateness for any
                particular purpose of any pricing or other information
                distributed via the Site or Services. Pricing information may be
                higher or lower than prices available on platforms providing
                similar services.
              </p>
              <p className="pt-[16px]">
                Any reference to a type of Digital Asset on the Site or
                otherwise during the use of the Services does not indicate our
                approval or disapproval of the technology on which the Digital
                Asset relies, and should not be used as a substitute for your
                understanding of the risks specific to each type of Digital
                Asset.
              </p>
              <p className="pt-[16px]">
                Use of the Services, in particular for trading Digital Assets,
                may carry financial risk. Digital Assets are, by their nature,
                highly experimental, risky, and volatile. Transactions entered
                into in connection with the Services are irreversible, final and
                there are no refunds. You acknowledge and agree that you will
                access and use the Site and the Services at your own risk. The
                risk of loss in trading Digital Assets can be substantial. You
                should, therefore, carefully consider whether such trading is
                suitable for you in light of your circumstances and financial
                resources. By using the Services, you represent and warrant that
                you have been, are, and will be solely responsible for making
                your independent appraisal and investigations into the risks of
                a given transaction and the underlying Digital Assets. You
                represent that you have sufficient knowledge, market
                sophistication, professional advice, and experience to make your
                evaluation of the merits and risks of any transaction conducted
                in connection with the Services or any Digital Asset. You accept
                all consequences of using the Services, including the risk that
                you may lose access to your Digital Assets indefinitely. All
                transaction decisions are made solely by you. Notwithstanding
                anything in these Terms, we accept no responsibility whatsoever
                for, and will in no circumstances be liable to you in connection
                with, your use of the Services for performing Digital Asset
                transactions.
              </p>
              <p className="pt-[16px]">
                Fewcha is a developer of software. Fewcha does not operate a
                Digital Asset exchange platform or offer trade execution or
                clearing services and, therefore, has no oversight, involvement,
                or control concerning your transactions using the Services. All
                transactions between users of Fewcha-developed software are
                executed peer-to-peer directly between the users' Solana (or
                other network) addresses through smart contracts. You are
                responsible for complying with all laws that may be applicable
                to or govern your use of the Services, including, but not
                limited to, the Commodity Exchange Act and the regulations
                promulgated thereunder by the U.S. Commodity Futures Trading
                Commission ("CFTC"), the federal securities laws and the
                regulations promulgated thereunder by the U.S. Securities and
                Exchange Commission ("SEC") and all foreign applicable laws.
              </p>
              <p className="pt-[16px]">
                You understand that Fewcha is not registered or licensed by the
                CFTC, SEC, or any financial regulatory authority. No financial
                regulatory authority has reviewed or approved the use of the
                Fewcha-developed software. The Site and the Fewcha-developed
                software do not constitute advice or a recommendation concerning
                any commodity, security, or other Digital Asset or instrument.
                Fewcha is not acting as an investment adviser or commodity
                trading adviser to any person or entity.
              </p>
              <p className="pt-[16px]">
                You expressly agree that you assume all risks in connection with
                your access and use of the Site and Services and your
                interaction therewith. You further expressly waive and release
                the Fewcha Parties from any and all liability, claims, causes of
                action, or damages arising from or in any way relating to your
                use of the Site and Services and your interaction therewith. If
                you are a California resident, you waive the benefits and
                protections of California Civil Code § 1542, which provides:
                "[a] general release does not extend to claims that the creditor
                or releasing party does not know or suspect to exist in his or
                her favor at the time of executing the release and that, if
                known by him or her, would have materially affected his or her
                settlement with the debtor or released party."
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Dispute Resolution"} />
              <p className="pt-[16px]">Governing Law</p>
              <p className="pt-[16px]">
                These Terms shall be construed and enforced in accordance with
                the laws of the state of California applicable to contracts
                entered into and performed in California by residents thereof;
                provided that all provisions hereof related to arbitration shall
                be governed by and construed in accordance with the Federal
                Arbitration Act (U.S. Code Title 9).
              </p>
              <p className="pt-[16px]">Mandatory Arbitration</p>
              <p className="pt-[16px]">
                PLEASE READ THIS "MANDATORY ARBITRATION" PROVISION VERY
                CAREFULLY. IT LIMITS YOUR RIGHTS IN THE EVENT OF A DISPUTE
                BETWEEN YOU AND Fewcha, SUBJECT TO THE TERMS AND OPT-OUT OPTION
                SET FORTH BELOW.
              </p>
              <p className="pt-[16px]">
                You and Fewcha agree that any and all past, present and future
                disputes, claims, or causes of action arising out of or relating
                to your use of any of the Site or the Services, this Agreement,
                or any other controversies or disputes between you and Fewcha
                (including, without limitation, disputes regarding the
                effectiveness, scope, validity or enforceability of this
                agreement to arbitrate) (collectively, "Dispute(s)"), shall be
                determined by arbitration, unless (A) your Country of Residence
                does not allow this arbitration agreement; (B) you opt out as
                provided below; or (C) your Dispute is subject to an exception
                to this agreement to arbitrate set forth below. You and Fewcha
                further agree that any arbitration pursuant to this Section
                shall not proceed as a class, group or representative action.
                The award of the arbitrator may be entered in any court having
                jurisdiction.
              </p>
              <p className="pt-[16px]">
                "Country of Residence" for purposes of this agreement to
                arbitrate means the country in which you hold citizenship or
                legal permanent residence, as well as any country from which you
                regularly access and use the Fewcha Services. If more than one
                country meets that definition for you, then your country of
                citizenship or legal permanent residence shall be your Country
                of Residence, and if you have more than one country of
                citizenship or legal permanent residence, it shall be the
                country with which you most closely are associated by permanent
                or most frequent residence.
              </p>
              <p className="pt-[16px]">
                Fewcha wants to address your concerns without the need for a
                formal legal dispute. Before filing a claim against Fewcha, you
                agree to try to resolve the Dispute informally by contacting
                Fewcha at support@Fewcha.app to notify Fewcha of the actual or
                potential Dispute. Similarly, Fewcha will undertake reasonable
                efforts to contact you to notify you of any actual or potential
                dispute to resolve any claim we may possess informally before
                taking any formal action. The party that provides the notice of
                the actual or potential Dispute (the "Notifying Party") will
                include in that notice (a "Notice of Dispute") the name of User,
                the Notifying Party's contact information for any communications
                relating to such Dispute (including for the Notifying Party's
                legal counsel if it is represented by counsel in connection with
                such Dispute), and sufficient details regarding such Dispute to
                enable the other party (the "Notified Party") to understand the
                basis of and evaluate the concerns raised. If the Notified Party
                responds within ten (10) business days after receiving the
                Notice of Dispute that it is ready and willing to engage in good
                faith discussions in an effort to resolve the Dispute
                informally, then each party shall promptly participate in such
                discussions in good faith.
              </p>
              <p className="pt-[16px]">
                If, notwithstanding the Notifying Party's compliance with all of
                its obligations under the preceding paragraph, a Dispute is not
                resolved within 30 days after the Notice of Dispute is sent (or
                if the Notified Party fails to respond to the Notice of Dispute
                within ten (10) business days), the Notifying Party may initiate
                an arbitration proceeding as described below. If either party
                purports to initiate arbitration without first providing a
                Notice of Dispute and otherwise complying with all of its
                obligations under the preceding paragraph, then, notwithstanding
                any other provision of this Agreement, the arbitrator(s) will
                promptly dismiss the claim with prejudice and will award the
                other party all of its costs and expenses (including, without
                limitation, reasonable attorneys' fees) incurred in connection
                with such Dispute.
              </p>
              <p className="pt-[16px]">
                We both agree to arbitrate (unless you opt out as described
                below). You and Fewcha each agrees to resolve any Disputes that
                are not resolved informally as described above through final and
                binding arbitration as discussed herein, except as set forth
                under "Exceptions to Agreement To Arbitrate" below.
              </p>
              <p className="pt-[16px]">
                If you do not wish to be subject to this agreement to arbitrate,
                you may opt out of this arbitration provision by sending a
                written notice to Fewcha at support@Fewcha.app within thirty
                (30) days of first accepting this Agreement. You must date the
                written notice, and include your first and last name, address,
                and a clear statement that you do not wish to resolve disputes
                with Fewcha through arbitration. If no written notice is
                submitted by the 30-day deadline, you will be deemed to have
                knowingly and intentionally waived your right to litigate any
                Dispute except with regard to the exceptions set forth below. By
                opting out of the agreement to arbitrate, you will not be
                precluded from using the Fewcha Service, but you and Fewcha will
                not permitted to invoke the mutual agreement to arbitrate to
                resolve Disputes under the terms otherwise provided herein.
              </p>
              <p className="pt-[16px]">
                You and Fewcha agree that the American Arbitration Association
                ("_ AAA ") will administer the arbitration under its Commercial
                Arbitration Rules and the Supplementary Procedures for Consumer
                Related Disputes in effect at the time arbitration is sought
                ("AAA Rules"). Those rules are available at www.adr.org or by
                calling the AAA at 1-800-778-7879. A party who desires to
                initiate arbitration must provide the other party with a written
                Demand for Arbitration as specified in the AAA Rules. (The AAA
                provides a general Demand for Arbitration.) Arbitration will
                proceed on an individual basis and will be handled by a sole
                arbitrator. The single arbitrator will be either a retired judge
                or an attorney licensed to practice law and will be selected by
                the parties from the AAA's roster of arbitrators. If the parties
                are unable to agree upon an arbitrator within fourteen (14) days
                of delivery of the Demand for Arbitration, then the AAA will
                appoint the arbitrator in accordance with the AAA Rules. The
                arbitrator shall be authorized to award any remedies, including
                injunctive relief, that would be available to you hereunder in
                an individual lawsuit. Notwithstanding any language to the
                contrary in this paragraph, if a party seeks injunctive relief
                that would significantly impact other Fewcha users as reasonably
                determined by either party, the parties agree that such
                arbitration will proceed on an individual basis but will be
                handled by a panel of three (3) arbitrators. Each party shall
                select one arbitrator, and the two party-selected arbitrators
                shall select the third, who shall serve as chair of the arbitral
                panel. That chairperson shall be a retired judge or an attorney
                licensed to practice law and with experience arbitrating or
                mediating disputes. In the event of disagreement as to whether
                the threshold for a three-arbitrator panel has been met, the
                sole arbitrator appointed in accordance with this Section shall
                make that determination. If the arbitrator determines a
                three-person panel is appropriate, the arbitrator may – if
                selected by either party or as the chair by the two
                party-selected arbitrators – participate in the arbitral panel.
                Except as and to the extent otherwise may be required by law,
                the arbitration proceeding and any award shall be confidential.
              </p>
              <p className="pt-[16px]">
                You and Fewcha further agree that the arbitration will be held
                in the English language in San Francisco, California, or, if you
                so elect, all proceedings can be conducted via videoconference,
                telephonically or via other remote electronic means. If Fewcha
                elects arbitration, Fewcha shall pay all of the AAA filing costs
                and administrative fees (other than hearing fees). If you elect
                arbitration, filing costs and administrative fees (other than
                hearing fees) shall be paid in accordance with the AAA Rules, or
                in accordance with countervailing law if contrary to the AAA
                Rules. However, if the value of the relief sought is $10,000 or
                less, at your request, Fewcha will pay all filing,
                administration, and arbitrator fees associated with the
                arbitration, unless the arbitrator(s) finds that either the
                substance of your claim or the relief sought was frivolous or
                was brought for an improper purpose (as measured by the
                standards set forth in Federal Rule of Civil Procedure 11(b)).
                In such circumstances, fees will be determined in accordance
                with the AAA Rules. Each party shall bear the expense of its own
                attorneys' fees, except as otherwise provided herein or required
                by law.
              </p>
              <p className="pt-[16px]">
                You and Fewcha agree that the arbitration of any Dispute shall
                proceed on an individual basis, and neither you nor Fewcha may
                bring a claim as a part of a class, group, collective,
                coordinated, consolidated or mass arbitration (each, a
                "Collective Arbitration"). Without limiting the generality of
                the foregoing, a claim to resolve any Dispute against Fewcha
                will be deemed a Collective Arbitration if (i) two (2) or more
                similar claims for arbitration are filed concurrently by or on
                behalf of one or more claimants; and (ii) counsel for the
                claimants are the same, share fees or coordinate across the
                arbitrations. "Concurrently" for purposes of this provision
                means that both arbitrations are pending (filed but not yet
                resolved) at the same time.
              </p>
              <p className="pt-[16px]">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER YOU
                NOR Fewcha SHALL BE ENTITLED TO CONSOLIDATE, JOIN OR COORDINATE
                DISPUTES BY OR AGAINST OTHER INDIVIDUALS OR ENTITIES, OR
                ARBITRATE OR LITIGATE ANY DISPUTE IN A REPRESENTATIVE CAPACITY,
                INCLUDING AS A REPRESENTATIVE MEMBER OF A CLASS OR IN A PRIVATE
                ATTORNEY GENERAL CAPACITY. IN CONNECTION WITH ANY DISPUTE (AS
                DEFINED ABOVE), ANY AND ALL SUCH RIGHTS ARE HEREBY EXPRESSLY AND
                UNCONDITIONALLY WAIVED. Without limiting the foregoing, any
                challenge to the validity of this paragraph shall be determined
                exclusively by the arbitrator.
              </p>
              <p className="pt-[16px]">
                Notwithstanding your and Fewcha's agreement to arbitrate
                Disputes, either you or Fewcha retain the following rights:
              </p>
              <p className="pt-[16px]">
                You and Fewcha retain the right (A) to bring an individual
                action in small claims process in the courts of your Country of
                Residence; and (B) to seek provisional relief in aid of
                arbitration in a court of competent jurisdiction to prevent the
                actual or threatened infringement, misappropriation or violation
                of a party's copyrights, trademarks, trade secrets, patents or
                other intellectual property rights. Further, this agreement to
                arbitrate does not deprive you of the protection of the
                mandatory provisions of the consumer protection laws in your
                Country of Residence; you shall retain any such rights and this
                agreement to arbitrate shall be construed accordingly.
              </p>
              <p className="pt-[16px]">
                Except as otherwise required by applicable law or provided in
                this Agreement, in the event that the agreement to arbitrate is
                found not to apply to you or your Dispute, you and Fewcha agree
                that any judicial proceeding may only be brought in a court of
                competent jurisdiction in California, United States. Both you
                and Fewcha consent to venue and personal jurisdiction there;
                provided that either party may seek provisional relief in aid of
                arbitration to enforce its intellectual property rights as
                provided above or bring an action to confirm an arbitral award
                in any court having jurisdiction.
              </p>
              <p className="pt-[16px]">
                This agreement to arbitrate shall survive the termination or
                expiration of this Agreement. With the exception of the
                provisions of this agreement to arbitrate that prohibit
                Collective Arbitration, if a court decides that any part of this
                agreement to arbitrate is invalid or unenforceable, then the
                remaining portions of this agreement to arbitrate shall
                nevertheless remain valid and in force. In the event that a
                court finds the prohibition of Collective Arbitration to be
                invalid or unenforceable, then the entirety of this agreement to
                arbitrate shall be deemed void (but no provisions of this
                Agreement unrelated to arbitration shall be void), and any
                remaining Dispute must be litigated in court pursuant to the
                preceding paragraph.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"General Terms"} />
              <p className="pt-[16px]">
                These Terms (including the Privacy Policy) constitute the entire
                and exclusive understanding and agreement between Fewcha and you
                regarding the Site, Services and Content, and these Terms
                supersede and replace any and all prior oral or written
                understandings or agreements between Fewcha and you regarding
                the Site, Services and Content. Except as provided above with
                respect to the provisions hereof pertaining to Collective
                Arbitration, if any provision of these Terms is held invalid or
                unenforceable (either by an arbitrator appointed as provided
                above or by a court of competent jurisdiction) that provision
                will be enforced to the maximum extent permissible and the other
                provisions of these Terms will remain in full force and effect.
                You may not assign or transfer these Terms, by operation of law
                or otherwise, without our prior written consent. Any attempt by
                you to assign or transfer these Terms without such consent will
                be null and void and of no force or effect. We may freely assign
                or transfer these Terms without restriction. Subject to the
                foregoing, these Terms will bind and inure to the benefit of the
                parties, their successors and permitted assigns.
              </p>
              <p className="pt-[16px]">
                Any notices or other communications provided by us under these
                Terms, including those regarding modifications to these Terms,
                will be given by posting to the Services and/or through other
                electronic communication. You agree and consent to receive
                electronically all communications, agreements, documents,
                notices and disclosures that we provide in connection with your
                Account and/or your use of the Services.
              </p>
              <p className="pt-[16px]">
                Our failure to enforce any right or provision of these Terms
                will not be considered a waiver of such right or provision. The
                waiver of any such right or provision will be effective only if
                in writing and signed by a duly authorized representative of
                Fewcha. Except as expressly set forth in these Terms, the
                exercise by either party of any of its remedies under these
                Terms will be without prejudice to its other remedies under
                these Terms or otherwise.
              </p>
              <p className="pt-[16px]">
                These Terms are written in English (U.S.). Any translated
                version is provided solely for your convenience. To the extent
                any translated version of our Terms conflicts with the English
                version, the English version controls.
              </p>
            </ContentContainer>
            <ContentContainer>
              <HeaderContent content={"Contact Information"} />
              <p className="pt-[16px]">
                If you have any questions about these Terms or the Services,
                please contact us at{" "}
                {
                  <p className="text-blue-600 inline-block">
                    support@Fewcha.app
                  </p>
                }
                .
              </p>
            </ContentContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
