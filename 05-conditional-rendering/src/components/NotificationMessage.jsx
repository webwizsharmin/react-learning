const NotificationMessage = (unreadCount) => {
  unreadCount = 5;

  return (
    <div>
      <h2>Notifications</h2>
      {unreadCount > 0 && <p>You have {unreadCount} unread messages. </p>}
    </div>
  );
};

export default NotificationMessage;
