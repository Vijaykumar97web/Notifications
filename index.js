const Notification = props => {
  //  Write your code here.
  const {className, imageUrl, message} = props
  const ContainerclassName = `notification-container ${className}`

  return (
    <div className={ContainerclassName}>
      <img className='image' src={imageUrl} />
      <p className='para'>{message}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='notification-app-container'>
    <h1 className='title'>Notifications</h1>
    <div className='notification-list-container'>
      <Notification
        className='box1'
        imageUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        message='Information Message'
      />
      <Notification
        className='box2'
        imageUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        message='Success Message'
      />
      <Notification
        className='box3'
        imageUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        message='Warning Message'
      />
      <Notification
        className='box4'
        imageUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        message='Danger Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
