
import React from "react";
import "./App.css";

function App() {
  const blogs = [
    {
      id: 1,
      category: "Technology",
      title: "The Future of Artificial Intelligence",
      description:
        "Discover how AI is changing the world and transforming our daily lives.",
      author: "John Smith",
      date: "Nov 15, 2026",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    },
    {
      id: 2,
      category: "Lifestyle",
      title: "Simple Habits for a Better Life",
      description:
        "Learn simple daily habits that can improve your productivity and happiness.",
      author: "Sarah Wilson",
      date: "Nov 12, 2026",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600",
    },
    {
      id: 3,
      category: "Programming",
      title: "Getting Started with React JS",
      description:
        "A beginner-friendly guide to understanding React and building web applications.",
      author: "David Lee",
      date: "Nov 10, 2026",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    },
  ];

  return (
    <div className="website">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Blog<span>ify.</span></h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <button className="nav-btn">Get Started</button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tagline">WELCOME TO BLOGIFY</span>

          <h1>
            Explore Ideas.
            <br />
            Share Your <span>Story.</span>
          </h1>

          <p>
            Discover interesting stories, technology, lifestyle,
            programming tips and ideas from creative writers
            around the world.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search articles..."
            />
            <button>Search</button>
          </div>

          <div className="hero-info">
            <span>✦ 500+ Articles</span>
            <span>✦ 100+ Writers</span>
            <span>✦ 10k+ Readers</span>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800"
            alt="Writing blog"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="categories">
        <div className="section-heading">
          <span>EXPLORE TOPICS</span>
          <h2>Browse Categories</h2>
          <p>Find articles that match your interests.</p>
        </div>

        <div className="category-list">
          <div className="category-card">💻 <h3>Technology</h3></div>
          <div className="category-card">🚀 <h3>Programming</h3></div>
          <div className="category-card">🌿 <h3>Lifestyle</h3></div>
          <div className="category-card">📈 <h3>Business</h3></div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blogs" id="blogs">
        <div className="section-heading">
          <span>OUR BLOG</span>
          <h2>Latest Articles</h2>
          <p>Read our latest stories and articles.</p>
        </div>

        <div className="blog-container">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-content">
                <span className="blog-category">
                  {blog.category}
                </span>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <div className="blog-meta">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                <a href="#about" className="read-more">
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div>
          <span>ABOUT BLOGIFY</span>
          <h2>Ideas Worth Sharing</h2>
          <p>
            Blogify is a platform where creativity meets knowledge.
            We bring together writers and readers to share useful
            information, inspiring stories and fresh ideas.
          </p>
          <button>Learn More</button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest articles and updates directly in your inbox.</p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />
          <button>Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>Blog<span>ify.</span></h2>
        <p>Share your ideas. Inspire the world.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <p className="copyright">
          © 2026 Blogify. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
