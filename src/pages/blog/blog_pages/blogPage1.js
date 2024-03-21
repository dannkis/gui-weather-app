import React from 'react'
import Blog from './blogPageTemplate'
import imageOne from "../../../media/blogs/blog2img1.jpg";
import imageTwo from "../../../media/blogs/blog2img2.png";
import imageThree from "../../../media/blogs/blog2img3.jpg";
/**
 * Blog Page 1 Component
 * Renders the content for the first blog page
 */
export default function blogPage1() {
  return (
    <Blog
    title=" Unlocking the Power of Weather Data: How Our App Can Revolutionize Your Farming Practices"
    text1="Todays agricultural landscape is always changing and in order to run a successful farm farmers need to stay ahead of the curve and be willing to adapt. Thankfully, one of the most powerful tools a farmer can use is weather data, can be easily accessed through our app. With information provided ranging from soil moisture levels to extreme weather conditions our app can be used to make crucial decisions on the farm"
    image1={imageOne}
    text2="One of the key features of our app is its ability to offer localised weather forecasts allowing farmers to make decisions with confidence knowing that the weather data they are receiving is accurate and about their specific location. However our app goes beyond providing weather insights, it also provides valuable insight into a range of weather related factors that can help farmers with making decisions on irrigation, fertilization and harvesting. Our app can help optimize costs, sustainability and yield allowing farmers to achieve optimal results."
    image2={imageTwo}
    text3="Furthermore, our weather app serves as a powerful tool for mitigating risks on the farm. By monitoring weather patterns, identifying potential extreme weather and alerting out farmers, It allows our farmers to take a more proactive approach to their work. It allows them to plan ahead to schedule and it also allows them to mitigate risks as much as possible"
    image3={imageThree}
    text4="Our final tip for today is for farmers to invest in infrastructure. Using our app farmers will be able to gain insights into weather trends in their specific location. This will allow them to make more informed decisions when investing in infrastructure. For example if our app shows that the weather conditions in a certain area tend to be dry and hot a farmer might then decide to invest in an irrigation system to make sure their crops are getting the water and nutrients they need. In conclusion, in order to thrive in today’s unpredictable climate farmers need to be well informed and our app helps keep our farmers ahead of the curve."
    />
  )
}
