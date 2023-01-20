import React from 'react';
import { request } from 'graphql-request'; // in your page
import Markdown from 'markdown-to-jsx';

const Page = `
query Page {
    page {
      Content
    }
  }
`;

const Imprint = () => (
  <section className="container mx-auto px-8">
    <p>
      Privacy Policy Personal data (usually referred to just as &quot;data&quot; below) will only be processed by us to
      the extent necessary and for the purpose of providing a functional and user-friendly website, including its
      contents, and the services offered there.
    </p>
    <p>
      Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to
      as the &quot;GDPR&quot;), &quot;processing&quot; refers to any operation or set of operations such as collection,
      recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by
      transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or
      destruction performed on personal data, whether by automated means or not.
    </p>
    <p>
      The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and
      legal basis for the processing of such data either under our own control or in conjunction with others. We also
      inform you below about the third-party components we use to optimize our website and improve the user experience
      which may result in said third parties also processing data they collect and control.
    </p>
    <p>Our privacy policy is structured as follows:</p>
    <p>
      I. Information about us as controllers of your data II. The rights of users and data subjects III. Information
      about the data processing
    </p>
    <p>
      I. Information about us as controllers of your data The party responsible for this website (the
      &quot;controller&quot;) for purposes of data protection law is:
    </p>
    <p>
      Christopher Capito Baumschulweg 64 55276 Oppenheim Germany Telephone: 015773481087 Email: christopher@capito.rocks
    </p>
    <p>The controller&#39;s data protection officer is:</p>
    <p>Christopher Capito</p>
    <p>
      II. The rights of users and data subjects With regard to the data processing to be described in more detail below,
      users and data subjects have the right
    </p>
    <p>
      to confirmation of whether data concerning them is being processed, information about the data being processed,
      further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR); to
      correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR); to the immediate deletion of data
      concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in
      Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR; to receive copies of the data concerning them
      and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);
      to file complaints with the supervisory authority if they believe that data concerning them is being processed by
      the controller in breach of data protection provisions (see also Art. 77 GDPR).
    </p>
    <p>
      In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections,
      deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this
      obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless,
      users have a right to information about these recipients.
    </p>
    <p>
      Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller&#39;s future
      processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing
      for the purpose of direct advertising is permissible.
    </p>
    <p>
      III. Information about the data processing Your data processed when using our website will be deleted or blocked
      as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any
      statutory storage obligations or unless otherwise stipulated below.
    </p>
    <p>
      Contact If you contact us via email or the contact form, the data you provide will be used for the purpose of
      processing your request. We must have this data in order to process and answer your inquiry; otherwise we will not
      be able to answer it in full or at all.
    </p>
    <p>The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR.</p>
    <p>
      Your data will be deleted once we have fully answered your inquiry and there is no further legal obligation to
      store your data, such as if an order or contract resulted therefrom.
    </p>
    <p>
      Social media links via graphics We also integrate the following social media sites into our website. The
      integration takes place via a linked graphic of the respective site. The use of these graphics stored on our own
      servers prevents the automatic connection to the servers of these networks for their display. Only by clicking on
      the corresponding graphic will you be forwarded to the service of the respective social network.
    </p>
    <p>
      Once you click, that network may record information about you and your visit to our site. It cannot be ruled out
      that such data will be processed in the United States.
    </p>
    <p>
      Initially, this data includes such things as your IP address, the date and time of your visit, and the page
      visited. If you are logged into your user account on that network, however, the network operator might assign the
      information collected about your visit to our site to your personal account. If you interact by clicking Like,
      Share, etc., this information can be stored your personal user account and possibly posted on the respective
      network. To prevent this, you need to log out of your social media account before clicking on the graphic. The
      various social media networks also offer settings that you can configure accordingly.
    </p>
    <p>The following social networks are integrated into our site by linked graphics:</p>
    <p>
      Facebook Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, a subsidiary of Facebook Inc., 1601 S.
      California Ave., Palo Alto, CA 94304, USA.
    </p>
    <p>
      Privacy Policy: <a href="https://www.facebook.com/policy.php">https://www.facebook.com/policy.php</a>
    </p>
    <p>
      LinkedIn LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland, a subsidiary of
      LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085 USA.
    </p>
    <p>
      Privacy Policy:{' '}
      <a href="https://www.linkedin.com/legal/privacy-policy">https://www.linkedin.com/legal/privacy-policy</a>
    </p>
    <p>
      Instagram Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, a subsidiary of Facebook Inc., 1601
      S. California Ave., Palo Alto, CA 94304, USA.
    </p>
    <p>
      Privacy Policy:{' '}
      <a href="https://help.instagram.com/519522125107875">https://help.instagram.com/519522125107875</a>
    </p>
    <p>
      Google Analytics We use Google Analytics on our website. This is a web analytics service provided by Google
      Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).
    </p>
    <p>
      The Google Analytics service is used to analyze how our website is used. The legal basis is Art. 6 Para. 1 lit. f)
      GDPR. Our legitimate interest lies in the analysis, optimization, and economic operation of our site.
    </p>
    <p>
      Usage and user-related information, such as IP address, place, time, or frequency of your visits to our website
      will be transmitted to a Google server in the United States and stored there. However, we use Google Analytics
      with the so-called anonymization function, whereby Google truncates the IP address within the EU or the EEA before
      it is transmitted to the US.
    </p>
    <p>
      The data collected in this way is in turn used by Google to provide us with an evaluation of visits to our website
      and what visitors do once there. This data can also be used to provide other services related to the use of our
      website and of the internet in general.
    </p>
    <p>
      Google states that it will not connect your IP address to other data. In addition, Google provides further
      information with regard to its data protection practices at
    </p>
    <p>
      <a href="https://www.google.com/intl/de/policies/privacy/partners">
        https://www.google.com/intl/de/policies/privacy/partners
      </a>
      ,
    </p>
    <p>including options you can exercise to prevent such use of your data.</p>
    <p>In addition, Google offers an opt-out add-on at</p>
    <p>
      <a href="https://tools.google.com/dlpage/gaoptout?hl=en">https://tools.google.com/dlpage/gaoptout?hl=en</a>
    </p>
    <p>
      in addition with further information. This add-on can be installed on the most popular browsers and offers you
      further control over the data that Google collects when you visit our website. The add-on informs Google
      Analytics&#39; JavaScript (ga.js) that no information about the website visit should be transmitted to Google
      Analytics. However, this does not prevent information from being transmitted to us or to other web analytics
      services we may use as detailed herein.
    </p>
    <p>Model Data Protection Statement for Anwaltskanzlei Weiß &amp; Partner</p>
  </section>
);
export default Imprint;
