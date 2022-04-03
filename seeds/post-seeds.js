const { Post } = require("../models");

const postdata = [
  {
    title: "Tech Trends",
    post_text:
      "One of the best examples of tech trends blogs we have seen is from Tulip, the Internet of Things (IoT) developer for industrial manufacturers. The startup raised $40 million in funding back in 2017 and not long after created one of the best tech blogs around. It’s been attracting steady organic traffic ever since.",
    user_id: 1,
  },
  {
    title: "Tutorials and Guides",
    post_text:
      "Salesforces “A Beginners Guide to CRM Systems” on their blog attracts over 10,000 organic site visitors per month, according to the SEO tool, Ahrefs.",
    user_id: 2,
  },
  {
    title: "Security Tips",
    post_text:
      "In 2020, companies around the world are set to spend over $173 billion on cybersecurity. Not to mention, there is a hacker attack every 39 seconds on someones personal computer or phone. Understandably, companies and individuals are worried about cybersecurity now more than ever.",
    user_id: 3,
  },
  {
    title: "FAQs",
    post_text:
      "The complexity of the tech industry leads to a lot of unanswered questions and confused customers. So why not answer some of the most commonly asked questions in full-length blog posts? It could save you some time emailing back and forth with clients. Plus, FAQs are great for web traffic.",
    user_id: 4,
  },
  {
    title: "Highlight Reviews",
    post_text:
      "If your business is in a crowded, competitive space in the tech industry, it might pay to write blogs that highlight positive reviews. This is a tactic that Jiobit, a manufacturer of comfortable health sensors for kids, uses regularly.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
