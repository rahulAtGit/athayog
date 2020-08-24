import React, { memo } from "react";
import Head from "next/head";

const WrapperHeadAtha = memo(() => {
  return (
    <Head>
      <title>Athayog Living</title>
      <meta name="title" content="Athayog Living"></meta>
      <meta
        name="description"
        content="An ocean of authentic yogic wisdom | Yog classes in Bangalore, India"
      ></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/atha/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/atha/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/atha/favicon-16x16.png"
      />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-172060828-1"
      ></script>
      <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>

      {/* <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries --> */}
      <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js"></script>
    </Head>
  );
});

export default WrapperHeadAtha;
