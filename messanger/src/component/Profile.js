import React from 'react';
import '../App.css';
import person from '../img/person.jpeg';
import camera from '../img/camera.png';
import validate from '../validation/validateFunction'

class Profile extends React.Component {
	constructor(props){
		super(props)
		this.state={
			bborderFName: '1px solid #999',
			bborderLName: '1px solid #999',
			bborderCity: '1px solid #999',
			bborderDescription: '1px solid #999',
			FName: null,
			LName: null,
			City: null,
			error: {
				FName: null,
				LName: null,
				City: null
			}
		}
	}
	handleChange = (e) => {
		let name = e.target.name
		this.setState({ [name]: e.target.value })
		{ e.target.value === '' && this.setState({ [name]: null})}
	}
	handleClick = (e) => {
		let name = e.target.name
		let bborder = 'bborder'+[name]
		this.setState({bborderFName: '1px solid #999',bborderLName: '1px solid #999',bborderCity: '1px solid #999',bborderDescription: '1px solid #999'})
		this.setState({ [bborder]: '2px solid rgb(75,135,35)' })
	}
	handleClickButton = () => {
		let FNameError = validate('firstname', this.state.FName)
		let LNameError = validate('lastname', this.state.LName)
		let CityError =validate('City',this.state.City)
		this.setState({...this.state, error: {...this.state.error, FName:FNameError, LName: LNameError, City: CityError}})
	}
	render(){
		return(
			<div>
				<div className="container_profile">
					<div className="Avatardiv">
						<img className='Avatar' src={person} />
						<button className="add_profileimg">
							<img className="cameraico" src={camera} />
						</button>
					</div>
					<div className="profile_text">
						<div className="profile">
							<b> &nbsp;&nbsp;&nbsp; My profile</b>
							<hr />
							<span className="First_name">&nbsp;&nbsp;&nbsp;First name </span>
							{ this.state.error.FName !== null &&
                    			<p className="FName_error">{this.state.error.FName}</p>
                   			}
							<input
							className="firstname_input"
							name="FName"
							onClick={this.handleClick}
							onChange={this.handleChange}
							style={{borderBottom: this.state.bborderFName}} />
							<span className="First_name">&nbsp;&nbsp;&nbsp;Last name </span>
							{ this.state.error.LName !== null &&
                    			<p className="LName_error">{this.state.error.LName}</p>
                   			}
							<input
							className="lastname_input"
							onClick={this.handleClick}
							onChange={this.handleChange}
							name="LName"
							style={{borderBottom: this.state.bborderLName}}/>
							<span className="City">&nbsp;&nbsp;&nbsp;City </span>
							{ this.state.error.City !== null &&
                    			<p className="City_error">{this.state.error.City}</p>
                   			}
							<input className="City_input"
							onClick={this.handleClick}
							onChange={this.handleChange}
							name="City"
							style={{borderBottom: this.state.bborderCity}}/>
							<span className="description">&nbsp;&nbsp;&nbsp;Bio </span>
							<textarea
							className="description_input"
							name="Description"
							onClick={this.handleClick}
							onChange={this.handleChange}
							style={{border: this.state.bborderDescription}}/>
						</div>
						<button
						className="save_profile"
						onClick={(e) => this.handleClickButton(e)} 
						>Save Profile
						</button>
					</div>
				</div>
			</div>
		)
	}
}
export default Profile;