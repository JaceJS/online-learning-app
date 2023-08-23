import Breadcrumbs from "../components/sections/Breadcrumbs";
import ContactSection from "../components/sections/ContactSection";
const ContactPage = () => {
    return (
        <main id="main">
            <Breadcrumbs
                title="Contact Us"
                description="Est dolorum ut non facere possimus quibusdam eligendi
                voluptatem. Quia id aut similique quia voluptas sit
                quaerat debitis. Rerum omnis ipsam aperiam consequatur
                laboriosam nemo harum praesentium."
            />
            <ContactSection />
        </main>
    );
};

export default ContactPage;
