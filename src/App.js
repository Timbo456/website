import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home'
// Added this to test it out
import MenuBar from './Components/MenuBar/MenuBar';

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Shop Scheduler',
        category: 'Web Design'
      },
      {
        title: 'Travel App',
        category: 'Android'
      },
      {
        title: 'Linked List',
        category: 'C Programming'
      }
    ]});

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});

    
  }

  render() {
  
    return (
      <div className="App">
       <MenuBar/>
       <Route exact path="/" component={Home}/>
       
       <Header/>
       <br></br>
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <Projects projects={this.state.projects} />
       <h2>Thank you!</h2>
       
       
       
      
      </div>
    );
  }
}

export default App;
