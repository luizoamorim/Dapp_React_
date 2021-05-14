import './styles.css'

const Dashboard = () => {
    const handleFileUpload = event => {
        console.log(event.target.files[0].name);
      };
      
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
                    <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Image description..."
                        required />
                  </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
              </form>
                    <div className="Dashboard-user-personal">
                        <h1>
                            Luiz Amorim
                        </h1>
                        <p>Planet: Earth</p>
                        <p>Brazil</p>
                    </div>
                </div>    
                
                <div className="Dashboard-user-posts">
                    
                </div>  
            
            </header>
        </div>
    )
}

export default Dashboard