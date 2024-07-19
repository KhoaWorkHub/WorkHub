export type User = {
    avatar_url: string;
    channels: string[] | null;
    created_at: string | null;
    email: string;
    id: string;
    is_away: boolean;
    name: string | null;
    phone: string | null;
    type: string | null;
    workspaces: string[] | null;
  };

  export type Workspace = {
    channels: string[] | null;
    created_at: string;
    id: string;
    image_url: string | null;
    invite_code: string | null;
    members: User[] | null;
    name: string;
    regulators: string[] | null;
    slug: string;
    super_admin: string;
  };

  export type Channel = {
    id: string;
    members: string[] | null;
    name: string;
    regulators: string[] | null;
    user_id: string;
    workspace_id: string;
    created_at: string;
  };