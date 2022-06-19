import { useHistory }from 'react-router-dom';

function SubmitThankYou() {
    const history = useHistory();
    const backToPage = () => {
        history.push('/');
    }
    return (
        <>
        <h1>Thank you for your feedback!</h1>
        <button onClick={backToPage}>Leave new feedback</button>
        </>
    )
}
export default SubmitThankYou;