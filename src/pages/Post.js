import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";
import Header2 from "../components/Header2";
import PageTitle from "../components/PageTitle";

import blogData from "../data/Blog";

function Post(props) {
  const [singleBlog, setSingleBlog] = useState([]);
  const [tagData, setTagData] = useState([]);
  const [catData, setCatData] = useState([]);
  const slug = props.match.params.slug;

  useEffect(() => {
    for (var i = 0; i < blogData.length; i++) {
      if (blogData[i].slug === slug) {
        setSingleBlog(blogData[i]);
        setTagData(blogData[i].tag);
        setCatData(blogData[i].category);
      }
    }
  }, [slug]);

  return (
    <div className="page-wrapper">
      <Header2 pageName="Blog" />
      <PageTitle pageName="Blog" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="blog-single">
                <div className="inner-box">
                  <div className="image">
                    <img src={singleBlog.mainImage} alt="" />
                  </div>
                  <div className="lower-content">
                    <ul className="post-meta">
                      <li>
                        <span className="fa fa-calendar"></span>July 25, 2019
                      </li>
                      <li>
                        <span className="fa fa-user"></span>By Admin
                      </li>
                      <li>
                        <span className="fa fa-list"></span>
                        {catData[0]}
                      </li>
                      {/* <li>
                        <span className="fa fa-comment"></span>(3) Comment
                      </li> */}
                    </ul>
                    <h4>{singleBlog.title}</h4>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: singleBlog.Description,
                      }}
                    >
                      {/* <p>
                        The man, who is in a stable condition in hospital, has
                        "potentially life-changing injuries" after the overnight
                        attack in Garvagh, County Londonderry. He was shot in
                        the arms and legs."What sort of men would think it is
                        accepttable to subject a young girl to this level of
                        brutality and violence?
                      </p>
                      <p>
                        "Every child has the right to feel safe and protected in
                        their own home - how is this poor child going to sleep
                        tonight or in coming nights? What are the long term
                        effects on her going to be?"
                      </p>
                      <p>
                        "It's quite obvious the hypocrites who carried out this
                        dreadful attack don't care at all about the children in
                        their community. I wonder how they would feel if their
                        own child witnessed such a level of violence?
                      </p>
                      <p>
                        "There is absolutely no justification for an attack like
                        this in our communities and we must all work together to
                        bring those responsible to justice and to stop this from
                        happening to another child."
                      </p>
                      <p>
                        Earlier this month,{" "}
                        <Link href="#">
                          the PSNI launched a hard-hitting advertisement
                          campaign
                        </Link>{" "}
                        aimed at changing public attitudes to paramilitary
                        attacks.
                      </p> */}
                      <div className="news-gallery">
                        <div className="row clearfix">
                          <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="image">
                              <img
                                src="/assets/images/resource/news-16.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="image">
                              <img
                                src="/assets/images/resource/news-17.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <h5>A Kentucky woman who was accused last year.</h5>
                      <p>
                        The intruders chased the girl in the house and
                        threatened her when she hid from them, according to the
                        PSNI Limavady Facebook page.
                      </p>
                      <p>
                        "She came out petrified with her Piggy Bank, HER PIGGY
                        BANK! hoping that the men would take it and leave her
                        dad alone," one outraged officer wrote.
                      </p>
                      <blockquote>
                        <div className="quote-icon flaticon-left-quote"></div>
                        <div className="quote-text">
                          What sort of men would think it is acceptable to
                          subject a young girl to this level of brutality and
                          violence? an attack like this in ourcommunities and we
                          must all work together.
                        </div>
                      </blockquote>
                      <p>
                        The intruders chased the girl in the house and
                        threatened her when she hid from them, according to the
                        PSNI Limavady Facebook page.
                      </p>
                      <p>
                        "She came out petrified with her Piggy Bank, HER PIGGY
                        BANK! hoping that the men would take it and leave her
                        dad alone," one outraged officer wrote.
                      </p> */}
                    </div>
                  </div>
                </div>

                <div className="post-share-options">
                  <div className="post-share-inner clearfix">
                    <div className="pull-left post-tags">
                      <span>Tags: </span>
                      {tagData.map((value, index) => {
                        return <Link href="#">{value}</Link>;
                      })}
                    </div>
                    <ul className="pull-right social-links clearfix">
                      <li className="facebook">
                        <Link href="#" className="fa fa-facebook"></Link>
                      </li>
                      <li className="twitter">
                        <Link href="#" className="fa fa-twitter"></Link>
                      </li>
                      <li className="google-plus">
                        <Link href="#" className="fa fa-google-plus"></Link>
                      </li>
                      <li className="dribble">
                        <Link href="#" className="fa fa-dribbble"></Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="new-posts">
                  <div className="clearfix">
                    <Link className="prev-post pull-left" href="#">
                      <span className="fa fa-angle-double-left"></span> Previous
                      Post
                    </Link>
                    <Link className="next-post pull-right" href="#">
                      Next Post{" "}
                      <span className="fa fa-angle-double-right"></span>
                    </Link>
                  </div>
                </div>

                {/* <div className="comments-area">
                  <div className="group-title">
                    <h6>Comments</h6>
                  </div>

                  <div className="comment-box">
                    <div className="comment">
                      <div className="author-thumb">
                        <img
                          src="/assets/images/resource/author-8.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-inner clearfix">
                        <div className="comment-info clearfix">
                          <strong>Riva Collins</strong>
                          <div className="comment-time">
                            {" "}
                            November 19, 2019 at 11:00 am{" "}
                          </div>
                        </div>
                        <div className="text">
                          It’s no secret that the digital industry is booming.
                          From exciting startups to need ghor global and brands,
                          companies are reaching out.
                        </div>
                        <Link className="comment-reply" href="#">
                          Reply <span className="fa fa-angle-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="comment-box">
                    <div className="comment">
                      <div className="author-thumb">
                        <img
                          src="/assets/images/resource/author-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-inner clearfix">
                        <div className="comment-info clearfix">
                          <strong>Obila Doe</strong>
                          <div className="comment-time">
                            {" "}
                            November 22, 2019 at 10:00 pm{" "}
                          </div>
                        </div>
                        <div className="text">
                          It’s no secret that the digital industry is booming.
                          From exciting startups to need ghor hmiu global and
                          brands, companies are reaching out.
                        </div>
                        <Link className="comment-reply" href="#">
                          Reply <span className="fa fa-angle-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="comment-form">
                  <div className="group-title">
                    <h6>Post A Comment</h6>
                    <div className="group-text">
                      Your email address will not be published *
                    </div>
                  </div>

                  <form method="post">
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="your comment"
                        ></textarea>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="name*"
                          required
                        />
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="email*"
                          required
                        />
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-4 form-group">
                        <input
                          type="text"
                          name="text"
                          placeholder="website*"
                          required
                        />
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12 form-group">
                        <button
                          className="theme-btn submit-btn"
                          type="submit"
                          name="submit-form"
                        >
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar default-sidebar">
                <div className="sidebar-widget search-box">
                  <form
                    method="post"
                    action="https://html.themexriver.com/finano/contact.html"
                  >
                    <div className="form-group">
                      <input
                        type="search"
                        name="search-field"
                        placeholder="Enter Your Keyword..."
                        required
                      />
                      <button type="submit">
                        <span className="icon fa fa-search"></span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="sidebar-widget sidebar-blog-category">
                  <div className="sidebar-title-two">
                    <h4>Categories</h4>
                  </div>
                  <ul className="blog-cat-two">
                    <li>
                      <Link href="#">
                        Consulting <span>(3)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Technology <span>(4)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Life style <span>(8)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget popular-posts">
                  <div className="sidebar-title-two">
                    <h4>Recent News</h4>
                  </div>

                  <article className="post">
                    <figure className="post-thumb">
                      <img
                        src="/assets/images/resource/post-thumb-1.jpg"
                        alt=""
                      />
                      <Link href="blog-single.html" className="overlay-box">
                        <span className="icon fa fa-link"></span>
                      </Link>
                    </figure>
                    <div className="text">
                      <Link href="blog-single.html">
                        Business structured nontp frank team
                      </Link>
                    </div>
                    <div className="post-info">July 25, 2019</div>
                  </article>

                  <article className="post">
                    <figure className="post-thumb">
                      <img
                        src="/assets/images/resource/post-thumb-2.jpg"
                        alt=""
                      />
                      <Link href="blog-single.html" className="overlay-box">
                        <span className="icon fa fa-link"></span>
                      </Link>
                    </figure>
                    <div className="text">
                      <Link href="blog-single.html">
                        Meetups and parties at night for every...
                      </Link>
                    </div>
                    <div className="post-info">July 26, 2019</div>
                  </article>

                  <article className="post">
                    <figure className="post-thumb">
                      <img
                        src="/assets/images/resource/post-thumb-3.jpg"
                        alt=""
                      />
                      <Link href="blog-single.html" className="overlay-box">
                        <span className="icon fa fa-link"></span>
                      </Link>
                    </figure>
                    <div className="text">
                      <Link href="blog-single.html">
                        Always found him speakingas many...
                      </Link>
                    </div>
                    <div className="post-info">July 25, 2019</div>
                  </article>
                </div>

                <div className="sidebar-widget sidebar-blog-category archive-widget">
                  <div className="sidebar-title-two">
                    <h4>Archives</h4>
                  </div>
                  <ul className="blog-cat-two">
                    <li>
                      <Link href="#">
                        January 2019 <span>(3)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        February 2019 <span>(2)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        May 2019 <span>(6)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget instagram-widget">
                  <div className="sidebar-title-two">
                    <h4>Gallery</h4>
                  </div>
                  <div className="images-outer clearfix">
                    <figure className="image-box">
                      <Link
                        href="/assets/images/gallery/1.jpg"
                        className="lightbox-image"
                        data-caption=""
                        data-fancybox="images"
                        title="Image Title Here"
                        data-fancybox-group="footer-gallery"
                      >
                        <span className="overlay-box flaticon-plus-symbol"></span>
                      </Link>
                      <img
                        src="/assets/images/gallery/instagram-1.jpg"
                        alt=""
                      />
                    </figure>

                    <figure className="image-box">
                      <Link
                        href="/assets/images/gallery/2.jpg"
                        className="lightbox-image"
                        data-caption=""
                        data-fancybox="images"
                        title="Image Title Here"
                        data-fancybox-group="footer-gallery"
                      >
                        <span className="overlay-box flaticon-plus-symbol"></span>
                      </Link>
                      <img
                        src="/assets/images/gallery/instagram-2.jpg"
                        alt=""
                      />
                    </figure>

                    <figure className="image-box">
                      <Link
                        href="/assets/images/gallery/3.jpg"
                        className="lightbox-image"
                        data-caption=""
                        data-fancybox="images"
                        title="Image Title Here"
                        data-fancybox-group="footer-gallery"
                      >
                        <span className="overlay-box flaticon-plus-symbol"></span>
                      </Link>
                      <img
                        src="/assets/images/gallery/instagram-3.jpg"
                        alt=""
                      />
                    </figure>

                    <figure className="image-box">
                      <Link
                        href="/assets/images/gallery/4.jpg"
                        className="lightbox-image"
                        data-caption=""
                        data-fancybox="images"
                        title="Image Title Here"
                        data-fancybox-group="footer-gallery"
                      >
                        <span className="overlay-box flaticon-plus-symbol"></span>
                      </Link>
                      <img
                        src="/assets/images/gallery/instagram-4.jpg"
                        alt=""
                      />
                    </figure>

                    <figure className="image-box">
                      <Link
                        href="/assets/images/gallery/1.jpg"
                        className="lightbox-image"
                        data-caption=""
                        data-fancybox="images"
                        title="Image Title Here"
                        data-fancybox-group="footer-gallery"
                      >
                        <span className="overlay-box flaticon-plus-symbol"></span>
                      </Link>
                      <img
                        src="/assets/images/gallery/instagram-5.jpg"
                        alt=""
                      />
                    </figure>

                    <figure className="image-box">
                      <Link
                        href="/assets/images/gallery/2.jpg"
                        className="lightbox-image"
                        data-caption=""
                        data-fancybox="images"
                        title="Image Title Here"
                        data-fancybox-group="footer-gallery"
                      >
                        <span className="overlay-box flaticon-plus-symbol"></span>
                      </Link>
                      <img
                        src="/assets/images/gallery/instagram-6.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>

                <div className="sidebar-widget popular-tags">
                  <div className="sidebar-title-two">
                    <h4>Tags</h4>
                  </div>
                  <Link href="#">Apps</Link>
                  <Link href="#">Cloud</Link>
                  <Link href="#">Life style</Link>
                  <Link href="#">Hosting</Link>
                  <Link href="#">Business</Link>
                </div>

                <div className="sidebar-widget banner-widget">
                  <div
                    className="widget-content"
                    style={{
                      backgroundImage:
                        "url(/assets/images/resource/service-15.jpg)",
                    }}
                  >
                    <div className="logo">
                      <img src="/assets/images/icons/widget-logo.png" alt="" />
                    </div>
                    <div className="title">Securied Business with</div>
                    <h2>Financ</h2>
                    <Link
                      href="contact.html"
                      className="theme-btn btn-style-seventen"
                    >
                      Let’s start now{" "}
                      <span className="icon flaticon-link"></span>
                    </Link>
                  </div>
                </div>
              </aside>
            </div> */}
          </div>
        </div>
      </div>

      <section className="call-to-action-two">
        <div className="auto-container">
          <div className="clearfix">
            <div className="pull-left">
              <h2>
                Request for <span>quote</span>
              </h2>
            </div>
            <div className="pull-right">
              <Link href="contact.html" className="theme-btn btn-style-five">
                Request now <span className="icon fa fa-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </div>
  );
}

export default Post;
