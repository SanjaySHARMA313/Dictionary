import React,{Component} from 'react';
import './RenderData.css';
class RenderData extends Component{
    renderData=(data, id)=>{
        let index=1;
        let index2=1;
        if(data!=='*' && data!=='#' && data!==''){
            document.getElementById('content-heading').style.display='block';
            return(
                <div id={id} key={id} className='data'>
                    <ol  key={id+'list'}>
                        {
                            data.map((description)=>{
                                {index++}
                                {index2=1}
                                if(!description.subsenses)
                                return(
                                    <li className='space' key={description.id}>
                                        {description.definitions}
                                    </li>           
                                )
                                else
                                return(
                                    <li key={description.id}>
                                        {description.definitions}
                                            {description.subsenses.map((defination)=>{
                                                {index2++}
                                                return(
                                                    <span className='helping-text space' key={defination.id}>
                                                        {index-1}.{index2-1} {defination.definitions[0]}
                                                    </span>
                                                )
                                            })}
                                        
                                    </li>    
                                )                        
                            })
                        }
                    </ol>
                </div>    
        ) 
    }
        else if(data==='#'){
                document.getElementById('content-heading').style.display='none';
                return(
                    <div id={id} className='error-message'>
                        <h4 id='not'>
                            No exact matches found for "<span className='word'>{this.props.data.word}</span>"
                        </h4>
                    </div>   
                )
            }
        else if(data==='*'){
            return(
                <div className='progress'>
                    <h4>Loading...</h4>
                </div>
            )
        }
    }
    showNoun=()=>{
        if(document.getElementById('noun2')){
            document.getElementById('verb2').style.display='none';
            document.getElementById('noun2').style.display='flex';}
        }
    showVerb=()=>{
        if(document.getElementById('verb2')){
            document.getElementById('noun2').style.display='none';
            document.getElementById('verb2').style.display='flex';}
        }
    render(){
        return(
            <div className='content-data'>
                <div id='content-heading'>
                <p id='noun' onClick={this.showNoun}>Noun</p>
                <p id='verb' onClick={this.showVerb}>Verb</p>
                </div>
                <div>
                    {this.renderData(this.props.data.noun, 'noun2')}
                    {this.renderData(this.props.data.verb, 'verb2')}
                </div>
            </div>
        )
    }
}
export default RenderData;  