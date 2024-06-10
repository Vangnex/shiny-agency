import { useParams, Link } from 'react-router-dom';

function Survey() {
    const { questionNumber } = useParams();
    const questionNumInt = parseInt(questionNumber);
    const prevQuestionNum = questionNumInt === 1 ? 1 : questionNumInt - 1;
    const nextQuestionNum = questionNumInt + 1;

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNum}`}>Précédent</Link>
            {questionNumInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNum}`}>Suivant</Link>
            )}
        </div>
    );
}

export default Survey;
