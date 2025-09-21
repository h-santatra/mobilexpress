import Header from '../components/section/Header';
import Footer from '../components/section/Footer';

export default function FAQ({ number }) {
  const faqList = [
    {
      question: 'What types of mobile phones do you sell ?',
      answer:
        'We offer a wide selection of smartphones from top global brands such as Apple, Samsung, Xiaomi, Huawei, Oppo, and more. You’ll find the latest models as well as budget-friendly options.',
    },
    {
      question:
        'Are all products sold on MobileXpress authentic and brand new ?',
      answer:
        'Yes, all our products are 100% authentic, brand new, and sourced directly from authorized distributors or manufacturers. We do not sell refurbished or counterfeit items.',
    },
    {
      question: 'Do you offer warranties on your products ?',
      answer:
        'Absolutely. All mobile phones come with a manufacturer’s warranty. We also provide additional warranty support depending on the product and brand.',
    },
    {
      question: 'What payment methods do you accept ?',
      answer:
        'We accept secure payments via credit/debit cards, mobile money, PayPal, and bank transfers. All transactions are encrypted for your safety.',
    },
    {
      question: 'How long does delivery take ?',
      answer:
        'Delivery times vary based on your location. Typically, orders within Madagascar are delivered within 2–5 business days. International shipping may take longer and will be calculated at checkout.',
    },
    {
      question: 'Can I track my order ?',
      answer:
        'Yes! Once your order is dispatched, you’ll receive a tracking number via email or SMS. You can use it to monitor your shipment in real time.',
    },
    {
      question: 'Do you offer returns or exchanges ?',
      answer:
        'We have a 7-day return policy for eligible products. If your item is defective or not as described, you can request a return or exchange through our support team.',
    },
    {
      question: 'How do I contact customer support ?',
      answer:
        'You can reach us via email at [support@mobilexpress.com](mailto:support@mobilexpress.com), WhatsApp at +261 32 123 4567, or through our social media channels. We’re here to help!',
    },
    {
      question: 'Are there any discounts or promotions available ?',
      answer:
        'Yes! We regularly offer deals, flash sales, and exclusive discounts. Follow us on social media or subscribe to our newsletter to stay updated.',
    },
    {
      question: 'Do you sell accessories and smart gadgets too ?',
      answer:
        'Definitely. In addition to smartphones, we stock a wide range of accessories including chargers, cases, earbuds, smartwatches, and more.',
    },
  ];
  return (
    <div className="font-[work_sans] space-y-8">
      <Header />
      <div className="flex flex-col lg:flex-row space-x-16 space-y-8 px-4  ">
        <div className="w-full lg:w-2/5 ">
          <h2 className="text-3xl font-medium">MobileXpress FAQs</h2>
          <h4 className="text-lg">
            Here we answer your frequently asked questions
          </h4>
        </div>
        <div className="space-y-1">
          {faqList.map((item, index) => {
            if (index <= number) {
              return (
                <div>
                  <div className="collapse collapse-plus bg-base-100 border-base-300 border">
                    <input type="checkbox" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-nowrap">
                      {item.question}
                    </div>
                    <div className="collapse-content text-sm">
                      {item.question}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
