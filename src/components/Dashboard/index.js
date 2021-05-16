import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { addPhoto } from '../../flux/reducers/usuario';
import './styles.css'

const Dashboard = ({ result }) => {    

    console.log("REDUCER DE USUARIO: " ,result)

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {      
      console.log("REDUCER DE USUARIO DENTRO: " ,result)
      dispatch(addPhoto('luizoamorim', data.userPhoto))      
    }
      
    return (
        <div className="Dashboard">      
            <header className="Dashboard-header">      
                <div className="Dashboard-user-data">
                    <div className="Dashboard-user-photo-border">
                        <img 
                            className="Dashboard-user-photo"
                            src='https://avatars.githubusercontent.com/u/73957838?s=400&u=cc8e8250ce3bc2c4833901363d46ad67247b5a01&v=4'
                            alt="imagem do usuário"  
                        />
                    </div>                    
                    <div className="Dashboard-user-personal">
                        <h1>
                            Luiz Amorim
                        </h1>
                        <p>Planet: Earth</p>
                        <p>Brazil</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input name="image" {...register('userPhoto', { required: true })} />
                  <button>Submit</button>
                </form>      
                
                          
                <div className="Dashboard-user-posts">
                    
                </div>  
            
            </header>
        </div>
    )
}

function mapStateToProps (state) {
  return {
    result: state.usuario
  }
}
export default connect(mapStateToProps)(Dashboard)