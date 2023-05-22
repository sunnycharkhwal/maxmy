import { Creation } from "./Modules/Maxlence/pages/Creation";
import { Growth } from "../src/Modules/Maxlence/pages/Growth";
import { Home } from "../src/Modules/Maxlence/pages/home";
import { Design } from "../src/Modules/Maxlence/pages/design";
import { Shop } from "../src/Modules/Maxlence/pages/shop";
import { Getintouch } from "../src/Modules/Maxlence/pages/getintouch";
import { Careersjd } from "../src/Modules/Maxlence/pages/careersjd";
import { Jobform } from "../src/Modules/Maxlence/pages/jobform";
import { Businessone } from "./Modules/Maxlence/pages/Business1";
import { Website } from "./Modules/Maxlence/pages/Website";
import Quest from "./Modules/Maxlence/pages/quest";
import QuesPlan from "./Modules/Maxlence/pages/quesPlan";
import { YourAccount } from "./Modules/Maxlence/pages/YourAccount";
import { YourServices } from "./Modules/Maxlence/pages/YourServices";
import { Payment } from "./Modules/Maxlence/pages/Payment";
import { Cart } from "./Modules/Maxlence/pages/cart";
import { Checkout } from "./Modules/Maxlence/pages/Checkout";
import { VideoMarketing } from "./Modules/Maxlence/pages/VideoMarketing";
import { ProductDetails } from "./Modules/Maxlence/pages/ProductDetails";
import { QuestionarePage } from "./Modules/Maxlence/pages/QuestionarePage";
import { BuyPlans } from "./Modules/Maxlence/pages/BuyPlans";
import { GoogleAds } from "./Modules/Maxlence/pages/GoogleAds";
import { SocialMediaMarketing } from "./Modules/Maxlence/pages/SocialMediaMarketing";
import { Seo } from "./Modules/Maxlence/components/Seo";
import { EmailMarketing } from "./Modules/Maxlence/pages/EmailMarketing";
import { MobileApp } from "./Modules/Maxlence/pages/MobileApp";
import { Saas } from "./Modules/Maxlence/pages/Saas";
import { CreationWebhost } from "./Modules/Maxlence/pages/CreationWebhost";
import { Careers } from "./Modules/Maxlence/pages/Careers";
import { Business2 } from "./Modules/Maxlence/pages/Business2";
import { DesignInspiration } from "./Modules/Maxlence/pages/DesignInspiration";
import { Brochure } from "./Modules/Maxlence/pages/Brochure";
import { Blogs } from "./Modules/Maxlence/pages/Blogs";
import { CaseStudy } from "./Modules/Maxlence/pages/CaseStudy";
import { Bepeseo } from "./Modules/Maxlence/pages/Bepeseo";
import { Tpruiux } from "./Modules/Maxlence/pages/Tpruiux";
import { SeoService } from "./Modules/Maxlence/pages/SeoService";
import { GoogleAdsService } from "./Modules/Maxlence/pages/GoogleAdsService";
import { SocialMediaService } from "./Modules/Maxlence/pages/SocialMediaService";
import { APIIntegration } from "./Modules/Maxlence/pages/APIIntegration";
import { FormTracker } from "./Modules/Maxlence/pages/FormTracker";
import { ReviewTracker } from "./Modules/Maxlence/pages/ReviewTracker";
import { Agencies } from "./Modules/Maxlence/pages/Agencies";
import { Support } from "./Modules/Maxlence/pages/Support";
import { AboutUs } from "./Modules/Maxlence/pages/AboutUs";
import { YourServicesDetails } from "./Modules/Maxlence/pages/YourServicesDetails";
import { Testimonial } from "./Modules/Maxlence/pages/Testimonial";
import { DesignInspirationDetail } from "./Modules/Maxlence/pages/DesignInspirationDetail";
import { PrivacyPolicy } from "./Modules/Maxlence/pages/PrivacyPolicy";
import { RefundPolicy } from "./Modules/Maxlence/pages/RefundPolicy";
import { TermsConditions } from "./Modules/Maxlence/pages/TermsConditions";
import { Helmet } from "react-helmet";
import { Agreement } from "./Modules/Maxlence/pages/Agreement";
import { WebsiteRedesign } from "./Modules/Maxlence/pages/WebsiteRedesign";
const Page = (props) => (
  <>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    {props.children}
  </>
);

export default [
  {
    path: "/",
    element: (
      <Page title="Home">
        <Home />
      </Page>
    ),
    exact: true,
  },
  {
    path: "/creation",
    element: (
      <Page title="Creation">
        <Creation />
      </Page>
    ),
  },
  {
    path: "/:name/:id",
    element: (
      <Page title="Website">
        <Website />
      </Page>
    ),
  },
  {
    path: "/quest/:id",
    element: (
      <Page title="Quest">
        <Quest />
      </Page>
    ),
  },
  {
    path: "/buyplans/:id",
    element: (
      <Page title="QuesPlan">
        <QuesPlan />
      </Page>
    ),
  },
  {
    path: "/growth",
    element: (
      <Page title="Growth">
        <Growth />
      </Page>
    ),
  },
  {
    path: "/design",
    element: (
      <Page title="Design">
        <Design />
      </Page>
    ),
  },
  {
    path: "/shop",
    element: (
      <Page title="Shop">
        <Shop />
      </Page>
    ),
  },
  {
    path: "/getintouch",
    element: (
      <Page title="Getintouch">
        <Getintouch />
      </Page>
    ),
  },
  {
    path: "/careersjd",
    element: (
      <Page title="Careersjd">
        <Careersjd />
      </Page>
    ),
  },
  {
    path: "/jobform",
    element: (
      <Page title="Jobform">
        <Jobform />
      </Page>
    ),
  },
  {
    path: "/business1",
    element: (
      <Page title="Businessone">
        <Businessone />
      </Page>
    ),
  },
  {
    path: "/your_account",
    element: (
      <Page title="YourAccount">
        <YourAccount />
      </Page>
    ),
  },
  {
    path: "/your_services",
    element: (
      <Page title="YourServices">
        <YourServices />
      </Page>
    ),
  },
  {
    path: "/payment",
    element: (
      <Page title="Payment">
        <Payment />
      </Page>
    ),
  },
  {
    path: "/cart",
    element: (
      <Page title="Cart">
        <Cart />
      </Page>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Page title="Checkout">
        <Checkout />
      </Page>
    ),
  },
  {
    path: "/video_marketing",
    element: (
      <Page title="VideoMarketing">
        <VideoMarketing />
      </Page>
    ),
  },
  {
    path: "/product_details",
    element: (
      <Page title="ProductDetails">
        <ProductDetails />
      </Page>
    ),
  },
  {
    path: "/Questionare_Page",
    element: (
      <Page title="QuestionarePage">
        <QuestionarePage />
      </Page>
    ),
  },
  {
    path: "/buy_plans",
    element: (
      <Page title="BuyPlans">
        <BuyPlans />
      </Page>
    ),
  },
  {
    path: "/google_ads",
    element: (
      <Page title="GoogleAds">
        <GoogleAds />
      </Page>
    ),
  },
  {
    path: "/social_media_marketing",
    element: (
      <Page title="SocialMediaMarketing">
        <SocialMediaMarketing />
      </Page>
    ),
  },
  {
    path: "/seo",
    element: (
      <Page title="Seo">
        <Seo />
      </Page>
    ),
  },
  {
    path: "/email_marketing",
    element: (
      <Page title="EmailMarketing">
        <EmailMarketing />
      </Page>
    ),
  },
  {
    path: "/mobile_app",
    element: (
      <Page title="MobileApp">
        <MobileApp />
      </Page>
    ),
  },
  {
    path: "/saas",
    element: (
      <Page title="Saas">
        <Saas />
      </Page>
    ),
  },
  {
    path: "/creation_webhost",
    element: (
      <Page title="CreationWebhost">
        <CreationWebhost />
      </Page>
    ),
  },
  {
    path: "/careers",
    element: (
      <Page title="Careers">
        <Careers />
      </Page>
    ),
  },
  {
    path: "/business2",
    element: (
      <Page title="Business2">
        <Business2 />
      </Page>
    ),
  },
  {
    path: "/design_inspiration",
    element: (
      <Page title="DesignInspiration">
        <DesignInspiration />
      </Page>
    ),
  },
  {
    path: "/brochure",
    element: (
      <Page title="Brochure">
        <Brochure />
      </Page>
    ),
  },
  {
    path: "/blogs",
    element: (
      <Page title="Blogs">
        <Blogs />
      </Page>
    ),
  },
  {
    path: "/case_study",
    element: (
      <Page title="CaseStudy">
        <CaseStudy />
      </Page>
    ),
  },
  {
    path: "/bepeseo",
    element: (
      <Page title="Bepeseo">
        <Bepeseo />
      </Page>
    ),
  },
  {
    path: "/tpruiux",
    element: (
      <Page title="Tpruiux">
        <Tpruiux />
      </Page>
    ),
  },
  {
    path: "/Seo_service",
    element: (
      <Page title="SeoService">
        <SeoService />
      </Page>
    ),
  },
  {
    path: "/google_ads_service",
    element: (
      <Page title="GoogleAdsService">
        <GoogleAdsService />
      </Page>
    ),
  },
  {
    path: "/social_media_service",
    element: (
      <Page title="SocialMediaService">
        <SocialMediaService />
      </Page>
    ),
  },
  {
    path: "/api_integration",
    element: (
      <Page title="APIIntegration">
        <APIIntegration />
      </Page>
    ),
  },
  {
    path: "/form_tracker",
    element: (
      <Page title="FormTracker">
        <FormTracker />
      </Page>
    ),
  },
  {
    path: "/review_tracker",
    element: (
      <Page title="ReviewTracker">
        <ReviewTracker />
      </Page>
    ),
  },
  {
    path: "/agencies",
    element: (
      <Page title="Agencies">
        <Agencies />
      </Page>
    ),
  },
  {
    path: "/support",
    element: (
      <Page title="Support">
        <Support />
      </Page>
    ),
  },
  {
    path: "/about_us",
    element: (
      <Page title="AboutUs">
        <AboutUs />
      </Page>
    ),
  },
  {
    path: "/your_services_details",
    element: (
      <Page title="YourServicesDetails">
        <YourServicesDetails />
      </Page>
    ),
  },
  {
    path: "/testimonial",
    element: (
      <Page title="Testimonial">
        <Testimonial />
      </Page>
    ),
  },
  {
    path: "/design_inspiration_detail",
    element: (
      <Page title="DesignInspirationDetail">
        <DesignInspirationDetail />
      </Page>
    ),
  },
  {
    path: "/privacy_policy",
    element: (
      <Page title="PrivacyPolicy">
        <PrivacyPolicy />
      </Page>
    ),
  },
  {
    path: "/refund_policy",
    element: (
      <Page title="RefundPolicy">
        <RefundPolicy />
      </Page>
    ),
  },
  {
    path: "/terms_conditions",
    element: (
      <Page title="TermsConditions">
        <TermsConditions />
      </Page>
    ),
  },
  {
    path: "/agreement",
    element: (
      <Page title="TermsConditions">
        <Agreement />
      </Page>
    ),
  },
  {
    path: "/website_redesign",
    element: (
      <Page title="TermsConditions">
        <WebsiteRedesign />
      </Page>
    ),
  },
];
