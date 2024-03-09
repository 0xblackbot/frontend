import {CONTACTS_EMAIL} from "../../data";
import {Heading} from "../../components/heading/heading";
import {Text} from "../../components/text/text";
import {Container} from "../../components/container/container";

export const TermsAndConditionScreen = () => (
    <Container>
        <Heading>Terms of Service:</Heading>

        <Text>
            These Terms of Service govern your use of Blackbot's website and services. By accessing or using our
            website, you agree to comply with these terms.
        </Text>

        <Text>
            Intellectual Property: All content on our website, including text, graphics, logos, and images, is the
            property of Blackbot and is protected by copyright and other intellectual property laws. You may not
            reproduce, distribute, or modify any content without our prior written consent.
        </Text>

        <Text>
            Use of Services: You may use our website and services for lawful purposes only. You agree not to engage
            in any activity that violates applicable laws or infringes on the rights of others.
        </Text>

        <Text>
            Disclaimer: We make no warranties or representations about the accuracy or completeness of the
            information provided on our website. We are not liable for any damages or losses arising from your use
            of our website or reliance on its content.
        </Text>

        <Text>
            Limitation of Liability: In no event shall Blackbot be liable for any direct, indirect, incidental,
            special, or consequential damages arising out of or in any way connected with your use of our website or
            services.</Text>

        <Text>
            Governing Law: These Terms of Service shall be governed by and construed in accordance with the laws of
            Ukraine, without regard to its conflict of law provisions.
        </Text>

        <Text>
            Changes to Terms: We reserve the right to update or modify these Terms of Service at any time without
            prior notice. Your continued use of our website after any such changes constitutes acceptance of the
            updated terms.
        </Text>

        <Text>
            If you have any questions or concerns about our Privacy Policy or Terms of Service, please contact us
            at <b>{CONTACTS_EMAIL}</b>.
        </Text>
    </Container>
);
