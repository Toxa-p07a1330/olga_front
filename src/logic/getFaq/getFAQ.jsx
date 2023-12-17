import {sleep} from "../helpers/sleep";

export const getFaq = async (searchString) => {
    const qaData = [
        {question: "What services do you offer?", answer: "We offer a wide range of services including..."},
        {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team at support@example.com."
        },
        {question: "Is there a free trial available?", answer: "Yes, we offer a free trial for 14 days."},
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Yes, you can cancel your subscription at any time without any penalties."
        },
        {
            question: "Do you have a mobile app?",
            answer: "Yes, we have a mobile app available for both iOS and Android devices."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit/debit cards, PayPal, and other secure payment methods."
        },
        {
            question: "How do I reset my password?",
            answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page."
        },
        {
            question: "Is my data secure with your platform?",
            answer: "Yes, we prioritize the security and privacy of your data. We use advanced encryption techniques."
        },
        {
            question: "What is your refund policy?",
            answer: "Our refund policy allows for a full refund within 30 days of the purchase date."
        },
        {
            question: "Can I upgrade my plan?",
            answer: "Yes, you can upgrade your plan at any time. Visit your account settings to make changes."
        },
        {
            question: "How often do you release updates?",
            answer: "We release updates regularly to ensure that our users have the latest features and improvements."
        },
        {
            question: "Is there a community forum for users?",
            answer: "Yes, we have a vibrant community forum where users can share experiences and get help from others."
        },
        {
            question: "What is the response time for customer support?",
            answer: "Our customer support team aims to respond to inquiries within 24 hours."
        },
        {
            question: "Can I use your service for personal and business purposes?",
            answer: "Yes, our service is suitable for both personal and business use."
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, we are transparent about our pricing, and there are no hidden fees."
        },
        {
            question: "Do you provide tutorials for beginners?",
            answer: "Yes, we offer tutorials and documentation to help beginners get started with our platform."
        },
        {
            question: "Can I integrate your service with other tools?",
            answer: "Yes, our service supports integrations with various third-party tools and platforms."
        },
        {
            question: "What is the minimum system requirements for your software?",
            answer: "The minimum system requirements include..."
        },
        {
            question: "Do you offer a student discount?",
            answer: "Yes, we offer a student discount. Please visit our pricing page for more details."
        },
        {
            question: "How can I unsubscribe from your newsletter?",
            answer: "You can unsubscribe from our newsletter by clicking the 'Unsubscribe' link at the bottom of the email."
        },
        {
            question: "Is there a mobile app for your platform?",
            answer: "Yes, we have a dedicated mobile app available for download on iOS and Android devices."
        },
        {
            question: "What steps should I take if I forget my account password?",
            answer: "You can reset your account password by following the 'Forgot Password' link on the login page."
        },
        {
            question: "Are there any restrictions on the free trial?",
            answer: "The free trial is fully functional, and there are no feature restrictions during the trial period."
        },
        {
            question: "Can I change my subscription plan later?",
            answer: "Yes, you can upgrade or downgrade your subscription plan at any time."
        },
        {
            question: "What is your policy on data privacy?",
            answer: "We take data privacy seriously and adhere to strict policies to protect the personal information of our users."
        },
        {
            question: "Do you offer a money-back guarantee?",
            answer: "Yes, we offer a 30-day money-back guarantee for our services."
        },
        {
            question: "Is there a user forum where I can connect with other users?",
            answer: "Yes, we have an active user forum where you can engage with other users, ask questions, and share insights."
        },
        {
            question: "Can I use your service on multiple devices?",
            answer: "Yes, you can use our service on multiple devices with a single account."
        },
        {
            question: "What security measures do you have in place to protect user data?",
            answer: "We employ industry-standard security measures, including encryption and regular security audits, to protect user data."
        },
        {
            question: "Can I customize my subscription?",
            answer: "Yes, you can customize your subscription based on your needs."
        }
    ];
    const filteredItems = qaData.filter(v => {
        if (!searchString)
            return v
        if (v.question.includes(searchString) || v.answer.includes(searchString))
            return v
    }).slice(0, 9)

    await sleep(100)
    return filteredItems || qaData
}