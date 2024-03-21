import React from 'react'
import Blog from './blogPageTemplate'
import imageOne from "../../../media/blogs/blog3img1.jpeg";
import imageTwo from "../../../media/blogs/blog3img2.png";
import imageThree from "../../../media/blogs/blog3img3.png";
/**
 * Blog Page 2 Component
 * Renders the content for the first blog page
 */
export default function blogPage2() {
  return (
    <Blog
    title="Weather Resilience 101: Tips and Strategies for Mitigating Risks on Your Farm"
    text1="With constant uncertainty in the world of agriculture farmers need to be able to build weather resilient strategies to keep risks low and yield high. From unpredictable weather patterns due to climate change to pest control and the spread of diseases UK farmers are under pressure to overcome these challenges. In todays blog post we will discuss a range of tips and tricks farmers can use to help them build resilience."
    image1={imageOne}
    text2="Tip #1 Stay informed: As discussed in previous blogs, Knowledge is power. Staying informed about weather conditions and patterns will help farmers mitigate risks by taking more proactive measures to keep their crops safe. Using a weather app like our own is an easy way to access a range of easy to understand weather information that will help farmers mitigate risks and optimize yield."
    image2={imageTwo}
    text3="Tip #2 Always plan ahead: Planning, even if its a couple weeks in advance, will help farmers mitigate risks that arise from being unprepared to deal with difficult weather conditions. By using our app farmers will be able to access both future weather conditions and previous weather patterns. With this information farmers should be able to come with detailed plans that take weather conditions into account so that they are never caught by surprise."
    image3={imageThree}
    text4="Tip #3 Invest in Infrastructure: Investing in a good range of infrastructure can enhance the weather resilience of crops on the farm. Some investments a farmer could make incluse greenhouse, irrigation systems and upgrading equipment. Making sure that the investments make sense for the farm is also important and taking into consideration the weather conditions that the farm regularly faces will help farmers make informed decisions on their farming."
    />
  )
}
