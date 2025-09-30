

function Posts() {
    const posts = Array.from({ length: 2 }, (_, i) => ({
        id: `post-${i + 1}`,
        category: "Nouveautés",
        title: "Achetez nos produits reconditionnés vérifiés par nos experts"
    }));
    return (
        <section className="container section-posts">
            {posts.map((post) => (
                <article 
                className="post-card" 
                key={post.id}>
                    <picture className='post-card_image'>
                        <source 
                            width={710}
                            height={390}
                            media="(min-width:1100px)"
                            srcSet="https://picsum.photos/710/390"
                            />
                        <img src="https://picsum.photos/318/242" alt="" className='post-card_image'width={318} height={242} />
                    </picture>
                    <div className="post-card_category">{post.category}</div>
                    <h3 className="post-card_title">
                        {post.title}
                    </h3>
                    <a href="/#" className="btn-bordered-white">Voir les produits</a>
                </article>
            ))}
        </section>
    )
}

export default Posts;