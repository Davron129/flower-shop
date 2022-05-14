import Card from './Card'
import Styles from './BlogPost.module.scss'

function BlogPosts() {
  return (
    <section className={Styles.blogPost}>
        <h2 className={Styles.section__title}>Our Blog Posts</h2>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>

        <div className={Styles.container}>
          <div className={Styles.card__wrapper}>
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
        </div>
    </section>
  )
}

export default BlogPosts