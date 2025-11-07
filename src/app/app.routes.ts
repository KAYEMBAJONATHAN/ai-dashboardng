import { Routes } from '@angular/router';
import { ChatsComponent } from './components/chats/chats';
import { ProjectsComponent } from './components/projects/projects';
import { LibraryComponent } from './components/library/library';
import { NewChatComponent } from './components/new-chat/new-chat';
import { SearchChatComponent } from './components/search-chat/search-chat';

export const routes: Routes = [

  { path: 'new-chat', component: NewChatComponent },
  { path: 'search', component: SearchChatComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'chats', component: ChatsComponent },
  { path: '', redirectTo: 'new-chat', pathMatch: 'full' }
];
