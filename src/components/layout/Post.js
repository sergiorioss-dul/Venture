import React, { Fragment, useContext } from "react";
import userContext from "../../context/user/userContext";
import Spinner from "../Spinner";

const Post = () => {
  const userCont = useContext(userContext);
  const { listPosts, deletePostFn, userActually, loadingState } = userCont;

  return (
    <Fragment>
      {loadingState ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="row mg">
            <h2>{userActually.first_name}'s Posts</h2>
            {listPosts.map((post) => (
              <div key={post.id} className="column">
                <div className="card">
                  <figure className="fir-image-figure">
                    <figcaption>
                      <div className="fig-author-figure-title">
                        <b>Title: </b>
                        {post.title}
                      </div>
                      <div className="fig-author-figure-title">
                        <b>Body: </b>
                        {post.body}
                      </div>
                      <button
                        type="button"
                        className="btn-primario"
                        onClick={() => deletePostFn(post.id)}
                      >
                        Delete
                      </button>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Post;
