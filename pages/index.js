import { useRef } from "react";

function HomePage() {
    const emailInputRef = useRef();
    const feedbackInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredFeedback = feedbackInputRef.current.value;

        fetch("/api/feedback", {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                feedback: enteredFeedback,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    return (
        <div>
            <h1>The Home Page</h1>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Your Email Adress</label>
                    <input type="email" id="email" ref={enteredEmail} />
                </div>
                <div>
                    <label htmlFor="feedback">Your Feedback Adress</label>
                    <textarea
                        type="text"
                        id="feedback"
                        rows="5"
                        ref={enteredFeedback}
                    />
                </div>
                <button type="submit">Send Feedback</button>
            </form>
        </div>
    );
}

export default HomePage;
