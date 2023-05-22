import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/Container/Container";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Dashboard from "../page/Dashboard";
import { Benchmark } from "../page/Benchmark";

import NavContext from "../Context/NavContext";
import { ClientProfile } from "../components/pages/Dashboard/page/ClientProfilePage";
import { ProjectList } from "../components/pages/Dashboard/page/ProjectList";
import { ProjectDetails } from "../components/pages/Dashboard/page/ProjectDetails";
import { AssignProject } from "../components/pages/Dashboard/page/AssignProject";
import { CreateTask } from "../components/pages/Dashboard/page/CreateTask";
import { Tasks } from "../page/Tasks";
import { ViewAllTasks } from "../components/pages/Tasks/ViewAllTasks";
import { Meetings } from "../components/pages/Meetings/Meetings";
import { MeetingsNotes } from "../components/pages/Meetings/MeetingsNotes";
import { Approvals } from "../components/pages/Approvals/Approvals";
import { Clients } from "../components/pages/Clients/Clients";
import { ClientsProfile } from "../components/pages/Clients/ClientProfile";
import { ClientProfileDetails } from "../components/pages/Clients/ClientProfileDetails";
import { NotificationsAll } from "../page/NotificationsAll";
import { JoinMeeting } from "../components/pages/Meetings/JoinMeeting";
import { Chats } from "../page/Chats";
import { Reports } from "../page/Reports";
import { Settings } from "../page/Settings";
import { Help } from "../page/Help";
import { EditNotes } from "../components/pages/Meetings/EditNotes";
import { NotesDetails } from "../page/NotesDetails";

const Index = () => {
  const [nav, setNav] = useState(true);
  const value = { nav, setNav };
  return (
    <>
      <div className="App">
        <NavContext.Provider value={value}>
          <Navbar />
          <Container
            stickyNav={<TopNavbar />}
            content={
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/client_Profile" element={<ClientProfile />} />
                <Route path="/benchmark" element={<Benchmark />} />
                <Route path="/project_list" element={<ProjectList />} />
                <Route path="/project_details" element={<ProjectDetails />} />
                <Route path="/assign_project" element={<AssignProject />} />
                <Route path="/create_task" element={<CreateTask />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/view_all_tasks" element={<ViewAllTasks />} />
                <Route path="/meetings" element={<Meetings />} />
                <Route path="/meeting_notes" element={<MeetingsNotes />} />
                <Route path="/approvals" element={<Approvals />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/clients_profile" element={<ClientsProfile />} />
                <Route
                  path="/client_profile_details"
                  element={<ClientProfileDetails />}
                />
                <Route
                  path="/all_notifications"
                  element={<NotificationsAll />}
                />
                <Route path="/join_meeting" element={<JoinMeeting />} />

                <Route path="/chats" element={<Chats />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<Help />} />
                <Route path="/edit_notes" element={<EditNotes />} />
                <Route path="/note_detailed" element={<NotesDetails />} />

                <Route path="*" element={<main>NOT FOUND</main>} />
              </Routes>
            }
          />
        </NavContext.Provider>
      </div>
    </>
  );
};
export default Index;
