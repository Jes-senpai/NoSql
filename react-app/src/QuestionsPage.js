import React, {useState} from 'react';
import ques from "./questions";
import axios from "axios";
import './questionPage.css';
import { useHistory } from "react-router-dom";
function QuestionsPage({nextPageData}) {
	let history = useHistory();
    const questions =ques;
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [responseData, setResponse] =useState([]);
	// const [score, setScore] = useState(0);
	const [data, setData] = useState({
        Q1:"",Q2:"",Q3:"",Q4:"",Q5:"",Q6:"",Q7:"",Q8:"",Q9:"",Q10:"",Q11:"",Q12:"",Q13:"",Q14:"",Q15:"",Q16:"",Q17:"",Q18:"",Q19:"",Q20:"",IvsE:"",NvsS:"",TvsF:"",JvsP:"",Result:"",category:""
    });
	const handleAnswerOptionClick = (option,index) => {
			const value = data ;
			const key ="Q"+index;
			value[key] = {text: option.answerText, score : option.score}
			setData(value);
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			const va=data
			const val1 = va.Q1.score+va.Q2.score+va.Q3.score+va.Q4.score+va.Q5.score;
			const val2 = va.Q6.score+va.Q7.score+va.Q8.score+va.Q9.score+va.Q10.score;
			const val3 = va.Q11.score+va.Q12.score+va.Q13.score+va.Q14.score+va.Q15.score;
			const val4 = va.Q16.score+va.Q17.score+va.Q18.score+va.Q19.score+va.Q20.score;
			console.log(val1);
			if(val1>12){
				const val = data ;
				val["IvsE"] ="I";
				setData(val)
			}else{
				const val = data ;
				val["IvsE"] ="E";
				setData(val)
			}
			if(val2>12){
				const val = data ;
				val["NvsS"] ="N";
				setData(val);
			}else{
				const val = data ;
				val["NvsS"] ="S";
				setData(val);
			}
			if(val3>12){
				const val = data ;
				val["TvsF"] ="F";
				setData(val);
			}else{
				const val = data ;
				val["TvsF"] ="T";
				setData(val);
			}
			if(val4>12){
				const val = data ;
				val["JvsP"] ="P";
				setData(val);
			}else{
				const val = data ;
				val["JvsP"] ="J";
				setData(val);
			}
			var res = data.IvsE+data.NvsS+data.TvsF+data.JvsP;
			const v =data;
			v["Result"] =res
			setData(v)
			setShowScore(true);
			console.log(data);
			if(data["Result"]!==""){
				const headers = {
					'Content-Type': 'application/json'
				  }
				axios.post("http://localhost:3002/adduser", data, {
					headers: headers
				}).then((result)=>{
					console.log(result.data);
					var val = responseData;
					val.push(result.data);
					setResponse(val);
					console.log(responseData)
				})
			}

		}
	};
	const nextPage=()=>{
		nextPageData(responseData);
		history.push("/personality");
	}
	return (
		<div className='app'>
			{showScore ? (<>
				<div className='score-section'>
					<p>You are an {data.Result}! :) </p><br />
					<button2 onClick={nextPage}>Know more {">>"}</button2>
                   {/* yaha pe result dikha dena */}

				</div>
                </>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div>

					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,index) => (
							<button1 key={index} onClick={() => handleAnswerOptionClick(answerOption,currentQuestion+1)}>{answerOption.answerText}</button1>
						))}
					</div>
				</>
			)}
		</div>
    );
}

export default QuestionsPage;
