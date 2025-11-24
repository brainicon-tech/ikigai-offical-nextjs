import React from 'react'
import FeaturedArticle from '../components/FeaturedArticle'
import LatestArticles from '../components/LatestArticles'
import SubscriptionForm from '../components/SubscriptionForm'

export default function page() {
  return (
    <div>
      <FeaturedArticle />
      <LatestArticles />
      <SubscriptionForm />
    </div>
  )
}
