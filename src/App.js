import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="header">
          <div class="header-title">Trello Board Clone</div>
          <div class="header-content">
            <div class="header-search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search for tasks..." />
            </div>
            <div class="header-profile">
              <div class="nav-btn">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="nav-btn">
                <i class="fas fa-bell"></i>
                <span class="alert-dot"></span>
              </div>
              <div class="profile-name">Vipin Yadav</div>
              <div class="profile-icon">
                <i class="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="sidebar">
            <div class="sidebar-item">
              <div class="sidebar-item-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="sidebar-item-title"> Manage </div>
            </div>
            <div class="sidebar-item sidebar-item-active">
              <div class="sidebar-item-icon">
                <i class="fas fa-list"></i>
              </div>
              <div class="sidebar-item-title"> Boards </div>
            </div>
            <div class="sidebar-item">
              <div class="sidebar-item-icon">
                <i class="far fa-calendar-alt"></i>
              </div>
              <div class="sidebar-item-title"> Schedule </div>
            </div>
            <div class="sidebar-item">
              <div class="sidebar-item-icon">
                <i class="fas fa-chart-bar"></i>
              </div>
              <div class="sidebar-item-title"> Reports </div>
            </div>
            <div class="sidebar-item">
              <div class="sidebar-item-icon">
                <i class="fas fa-cog"></i>
              </div>
              <div class="sidebar-item-title"> Settings </div>
            </div>
          </div>

          <div class="main-content">
            <div class="board-header">
              <div class="board-header-title">Studio Board</div>
              <div class="board-header-people">
                <div>
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="board-container" id="boardContainer">
              {/* <!-- Task List Will be rendered here --> */}

              <div class="task-list-wrapper" id="newListWrapper">
                <div class="task-list-card new-list-card">
                  <button class="task-add" id="createListButton">
                    Create New List
                    <i class="fas fa-plus"></i>
                  </button>

                  <form class="task-add-form hidden" id="createListForm">
                    <input
                      name="listTitle"
                      type="text"
                      placeholder="Enter title of the list"
                      autofocus
                      required
                    />
                    <button type="submit" class="btn-success">
                      Add List
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  );
}
