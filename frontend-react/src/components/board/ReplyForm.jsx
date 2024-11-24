//https://htmlcssfreebies.com/bootstrap-5-comment-form-section-component/

function ReplyForm() {
    return (
        // HTML<!-- Comment Form 1 - HCF Bootstrap 5 Component -->
        <section className="bg-light py-5 py-xl-6">
            <div className="container mb-5 mb-md-6">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                        <h2 className="mb-4 display-5">Comment Form</h2>
                        <p className="text-secondary mb-4 mb-md-5">
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                            Pellentesque et neque id ligula mattis commodo.
                        </p>
                        <hr className="w-50 mx-auto mb-0 text-secondary" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-lg-center">
                    <div className="col-12 col-lg-9">
                        <div className="bg-white border rounded shadow-sm overflow-hidden">
                            <form action="#!">
                                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                    <div className="col-12 col-md-4">
                                        <label
                                            htmlFor="fullname"
                                            className="form-label"
                                        >
                                            Name{' '}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-person"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                </svg>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fullname"
                                                defaultValue
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            Email{' '}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-envelope"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                </svg>
                                            </span>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                defaultValue
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label
                                            htmlFor="website"
                                            className="form-label"
                                        >
                                            Website
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-globe"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                                </svg>
                                            </span>
                                            <input
                                                type="url"
                                                className="form-control"
                                                id="website"
                                                defaultValue
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="comment"
                                            className="form-label"
                                        >
                                            Comment{' '}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="comment"
                                            rows={3}
                                            required
                                            defaultValue={''}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="savecheck"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="savecheck"
                                        >
                                            Save my data in this browser for the
                                            next time I comment.
                                        </label>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button
                                                className="btn btn-primary btn-lg"
                                                type="submit"
                                            >
                                                Post Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReplyForm;
