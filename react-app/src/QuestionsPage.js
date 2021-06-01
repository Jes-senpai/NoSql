import React, {useState, useContext} from 'react';
import ques from "./questions";
import axios from "axios";
import './questionPage.css';
import { useHistory } from "react-router-dom";
import {PathContext} from './context';
import {motion} from "framer-motion";
function QuestionsPage({nextPageData}) {
	const path= useContext(PathContext); 
	let history = useHistory();
    const questions =ques;
	const [hasError, setError]=useState(true);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [responseData, setResponse] =useState([]);
	const [data, setData] = useState({
        Q1:"",Q2:"",Q3:"",Q4:"",Q5:"",Q6:"",Q7:"",Q8:"",Q9:"",Q10:"",Q11:"",Q12:"",Q13:"",Q14:"",Q15:"",Q16:"",Q17:"",Q18:"",Q19:"",Q20:"",IvsE:"",NvsS:"",TvsF:"",JvsP:"",Result:"",Q0:""
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
			if(val1>15){
				const val = data ;
				val["IvsE"] ={type: "I", score: val1};
				setData(val)
			}else{
				const val = data ;
				val["IvsE"] ={type: "E", score: val1};
				setData(val)
			}
			if(val2>15){
				const val = data ;
				val["NvsS"] ={type: "N", score: val2};
				setData(val);
			}else{
				const val = data ;
				val["NvsS"] ={type: "S", score: val2};
				setData(val);
			}
			if(val3>15){
				const val = data ;
				val["TvsF"] ={type: "F", score: val3};
				setData(val);
			}else{
				const val = data ;
				val["TvsF"] ={type: "T", score: val3};
				setData(val);
			}
			if(val4>15){
				const val = data ;
				val["JvsP"] ={type: "P", score: val4};
				setData(val);
			}else{
				const val = data ;
				val["JvsP"] ={type: "J", score: val4};
				setData(val);
			}
			var res = data.IvsE.type+data.NvsS.type+data.TvsF.type+data.JvsP.type;
			var vals= val1+val2+val3+val4;
			var rs ={type : res, score:vals};
			const v =data;
			v["Result"] =rs
			setData(v)
			setShowScore(true);
			console.log(data);
			if(data["Result"]!==""){
				const headers = {
					'Content-Type': 'application/json'
				  }
				  const p= path+"/adduser"
				axios.post(p, data, {
					headers: headers
				}).then((result)=>{
					console.log(result.data);
					var val = responseData;
					val.push(result.data);
					setResponse(val);
					setError(false);
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
					<p>You are an {data.Result.type}! :) </p>
					<br />
					<p>The Myers Briggs Type Indicator (or MBTI for short) is a personality type system that divides everyone into 16 distinct personality types across 4 axis:
							<br/>
							<br/>
							Introversion (I) – Extroversion (E) <br/>
							Intuition (N) – Sensing (S)<br/>
							Thinking (T) – Feeling (F)<br/>
							Judging (J) – Perceiving (P)
					</p>
					<br/>
					{!hasError && <motion.button 
					initial={{x:-1000}}
					animate={{x:-10}}
					whileHover={{scale :1.3}}
					className="button2" onClick={nextPage}>Know more </motion.button>}
				</div>
                </>
			) : (
				<>
					<div
					initial ={{x: -1000}} 
					animate={{x:-10}}
					className='question-section'>
						<div className='question-count'>
							<span>{currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div>

					</div>

					<div
					className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,index) => (
							<button
							initial ={{x: -1000}} 
							animate={{x:-10}} 
							 className="button1" key={index} onClick={() => handleAnswerOptionClick(answerOption,currentQuestion)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
    );
}

export default QuestionsPage;
