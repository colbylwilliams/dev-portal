export type User = PublicUser | PrivateUser;

/** Simple User */
export type NullableSimpleUser = {
    name?: string | null;
    email?: string | null;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    starred_at?: string;
} | null;
/** GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and builtIn webhooks. GitHub apps are first class actors within GitHub. */
export type Integration = {
    /** Unique identifier of the GitHub app */
    id: number;
    /** The slug name of the GitHub app */
    slug?: string;
    node_id: string;
    owner: NullableSimpleUser;
    /** The name of the GitHub app */
    name: string;
    description: string | null;
    external_url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    /** The set of permissions for the GitHub app */
    permissions: {
        issues?: string;
        checks?: string;
        metadata?: string;
        contents?: string;
        deployments?: string;
    } & { [key: string]: string };
    /** The list of events for the GitHub app */
    events: string[];
    /** The number of installations associated with the GitHub app */
    installations_count?: number;
    client_id?: string;
    client_secret?: string;
    webhook_secret?: string | null;
    pem?: string;
};
/** Basic Error */
export type BasicError = {
    message?: string;
    documentation_url?: string;
    url?: string;
    status?: string;
};
/** Validation Error Simple */
export type ValidationErrorSimple = {
    message: string;
    documentation_url: string;
    errors?: string[];
};
/** The URL to which the payloads will be delivered. */
export type WebhookConfigUrl = string;
/** The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`. */
export type WebhookConfigContentType = string;
/** If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/eventPayloads/#deliveryHeaders). */
export type WebhookConfigSecret = string;
export type WebhookConfigInsecureSsl = string | number;
/** Configuration object of the webhook */
export type WebhookConfig = {
    url?: WebhookConfigUrl;
    content_type?: WebhookConfigContentType;
    secret?: WebhookConfigSecret;
    insecure_ssl?: WebhookConfigInsecureSsl;
};
/** Delivery made by a webhook, without request and response information. */
export type HookDeliveryItem = {
    /** Unique identifier of the webhook delivery. */
    id: number;
    /** Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). */
    guid: string;
    /** Time when the webhook delivery occurred. */
    delivered_at: string;
    /** Whether the webhook delivery is a redelivery. */
    redelivery: boolean;
    /** Time spent delivering. */
    duration: number;
    /** Describes the response returned after attempting the delivery. */
    status: string;
    /** Status code received when delivery was made. */
    status_code: number;
    /** The event that triggered the delivery. */
    event: string;
    /** The type of activity for the event that triggered the delivery. */
    action: string | null;
    /** The id of the GitHub App installation associated with this event. */
    installation_id: number | null;
    /** The id of the repository associated with this event. */
    repository_id: number | null;
};
/** Scim Error */
export type ScimError = {
    message?: string | null;
    documentation_url?: string | null;
    detail?: string | null;
    status?: number;
    scimType?: string | null;
    schemas?: string[];
};
/** Validation Error */
export type ValidationError = {
    message: string;
    documentation_url: string;
    errors?: {
        resource?: string;
        field?: string;
        message?: string;
        code: string;
        index?: number;
        value?: (string | null) | (number | null) | (string[] | null);
    }[];
};
/** Delivery made by a webhook. */
export type HookDelivery = {
    /** Unique identifier of the delivery. */
    id: number;
    /** Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). */
    guid: string;
    /** Time when the delivery was delivered. */
    delivered_at: string;
    /** Whether the delivery is a redelivery. */
    redelivery: boolean;
    /** Time spent delivering. */
    duration: number;
    /** Description of the status of the attempted delivery */
    status: string;
    /** Status code received when delivery was made. */
    status_code: number;
    /** The event that triggered the delivery. */
    event: string;
    /** The type of activity for the event that triggered the delivery. */
    action: string | null;
    /** The id of the GitHub App installation associated with this event. */
    installation_id: number | null;
    /** The id of the repository associated with this event. */
    repository_id: number | null;
    /** The URL target of the delivery. */
    url?: string;
    request: {
        /** The request headers sent with the webhook delivery. */
        headers: { [key: string]: unknown } | null;
        /** The webhook payload. */
        payload: { [key: string]: unknown } | null;
    };
    response: {
        /** The response headers received when the delivery was made. */
        headers: { [key: string]: unknown } | null;
        /** The response payload received. */
        payload: string | null;
    };
};
/** Simple User */
export type SimpleUser = {
    name?: string | null;
    email?: string | null;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    starred_at?: string;
};
/** An enterprise account */
export type Enterprise = {
    /** A short description of the enterprise. */
    description?: string | null;
    html_url: string;
    /** The enterprise's website URL. */
    website_url?: string | null;
    /** Unique identifier of the enterprise */
    id: number;
    node_id: string;
    /** The name of the enterprise. */
    name: string;
    /** The slug url identifier for the enterprise. */
    slug: string;
    created_at: string | null;
    updated_at: string | null;
    avatar_url: string;
};
/** The permissions granted to the userToServer access token. */
export type AppPermissions = {
    /** The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts. Can be one of: `read` or `write`. */
    actions?: "read" | "write";
    /** The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. Can be one of: `read` or `write`. */
    administration?: "read" | "write";
    /** The level of permission to grant the access token for checks on code. Can be one of: `read` or `write`. */
    checks?: "read" | "write";
    /** The level of permission to grant the access token for notification of content references and creation content attachments. Can be one of: `read` or `write`. */
    content_references?: "read" | "write";
    /** The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges. Can be one of: `read` or `write`. */
    contents?: "read" | "write";
    /** The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`. */
    deployments?: "read" | "write";
    /** The level of permission to grant the access token for managing repository environments. Can be one of: `read` or `write`. */
    environments?: "read" | "write";
    /** The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones. Can be one of: `read` or `write`. */
    issues?: "read" | "write";
    /** The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata. Can be one of: `read` or `write`. */
    metadata?: "read" | "write";
    /** The level of permission to grant the access token for packages published to GitHub Packages. Can be one of: `read` or `write`. */
    packages?: "read" | "write";
    /** The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds. Can be one of: `read` or `write`. */
    pages?: "read" | "write";
    /** The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges. Can be one of: `read` or `write`. */
    pull_requests?: "read" | "write";
    /** The level of permission to grant the access token to manage the postReceive hooks for a repository. Can be one of: `read` or `write`. */
    repository_hooks?: "read" | "write";
    /** The level of permission to grant the access token to manage repository projects, columns, and cards. Can be one of: `read`, `write`, or `admin`. */
    repository_projects?: "read" | "write" | "admin";
    /** The level of permission to grant the access token to view and manage secret scanning alerts. Can be one of: `read` or `write`. */
    secret_scanning_alerts?: "read" | "write";
    /** The level of permission to grant the access token to manage repository secrets. Can be one of: `read` or `write`. */
    secrets?: "read" | "write";
    /** The level of permission to grant the access token to view and manage security events like code scanning alerts. Can be one of: `read` or `write`. */
    security_events?: "read" | "write";
    /** The level of permission to grant the access token to manage just a single file. Can be one of: `read` or `write`. */
    single_file?: "read" | "write";
    /** The level of permission to grant the access token for commit statuses. Can be one of: `read` or `write`. */
    statuses?: "read" | "write";
    /** The level of permission to grant the access token to retrieve Dependabot alerts. Can be one of: `read`. */
    vulnerability_alerts?: "read";
    /** The level of permission to grant the access token to update GitHub Actions workflow files. Can be one of: `write`. */
    workflows?: "write";
    /** The level of permission to grant the access token for organization teams and members. Can be one of: `read` or `write`. */
    members?: "read" | "write";
    /** The level of permission to grant the access token to manage access to an organization. Can be one of: `read` or `write`. */
    organization_administration?: "read" | "write";
    /** The level of permission to grant the access token to manage the postReceive hooks for an organization. Can be one of: `read` or `write`. */
    organization_hooks?: "read" | "write";
    /** The level of permission to grant the access token for viewing an organization's plan. Can be one of: `read`. */
    organization_plan?: "read";
    /** The level of permission to grant the access token to manage organization projects, columns, and cards. Can be one of: `read`, `write`, or `admin`. */
    organization_projects?: "read" | "write" | "admin";
    /** The level of permission to grant the access token for organization packages published to GitHub Packages. Can be one of: `read` or `write`. */
    organization_packages?: "read" | "write";
    /** The level of permission to grant the access token to manage organization secrets. Can be one of: `read` or `write`. */
    organization_secrets?: "read" | "write";
    /** The level of permission to grant the access token to view and manage GitHub Actions selfHosted runners available to an organization. Can be one of: `read` or `write`. */
    organization_self_hosted_runners?: "read" | "write";
    /** The level of permission to grant the access token to view and manage users blocked by the organization. Can be one of: `read` or `write`. */
    organization_user_blocking?: "read" | "write";
    /** The level of permission to grant the access token to manage team discussions and related comments. Can be one of: `read` or `write`. */
    team_discussions?: "read" | "write";
};
/** Installation */
export type Installation = {
    /** The ID of the installation. */
    id: number;
    account:
    | (Partial<SimpleUser> &
        Partial<Enterprise>)
    | null;
    /** Describe whether all repositories have been selected or there's a selection involved */
    repository_selection: "all" | "selected";
    access_tokens_url: string;
    repositories_url: string;
    html_url: string;
    app_id: number;
    /** The ID of the user or organization this token is being scoped to. */
    target_id: number;
    target_type: string;
    permissions: AppPermissions;
    events: string[];
    created_at: string;
    updated_at: string;
    single_file_name: string | null;
    has_multiple_single_files?: boolean;
    single_file_paths?: string[];
    app_slug: string;
    suspended_by: NullableSimpleUser;
    suspended_at: string | null;
    contact_email?: string | null;
};
/** License Simple */
export type NullableLicenseSimple = {
    key: string;
    name: string;
    url: string | null;
    spdx_id: string | null;
    node_id: string;
    html_url?: string;
} | null;
/** A git repository */
export type Repository = {
    /** Unique identifier of the repository */
    id: number;
    node_id: string;
    /** The name of the repository. */
    name: string;
    full_name: string;
    license: NullableLicenseSimple;
    organization?: NullableSimpleUser;
    forks: number;
    permissions?: {
        admin: boolean;
        pull: boolean;
        triage?: boolean;
        push: boolean;
        maintain?: boolean;
    };
    owner: SimpleUser;
    /** Whether the repository is private or public. */
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url: string;
    mirror_url: string | null;
    hooks_url: string;
    svn_url: string;
    homepage: string | null;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    /** The default branch of the repository. */
    default_branch: string;
    open_issues_count: number;
    /** Whether this repository acts as a template that can be used to generate new repositories. */
    is_template?: boolean;
    topics?: string[];
    /** Whether issues are enabled. */
    has_issues: boolean;
    /** Whether projects are enabled. */
    has_projects: boolean;
    /** Whether the wiki is enabled. */
    has_wiki: boolean;
    has_pages: boolean;
    /** Whether downloads are enabled. */
    has_downloads: boolean;
    /** Whether the repository is archived. */
    archived: boolean;
    /** Returns whether or not this repository disabled. */
    disabled: boolean;
    /** The repository visibility: public, private, or internal. */
    visibility?: string;
    pushed_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    /** Whether to allow rebase merges for pull requests. */
    allow_rebase_merge?: boolean;
    template_repository?: {
        id?: number;
        node_id?: string;
        name?: string;
        full_name?: string;
        owner?: {
            login?: string;
            id?: number;
            node_id?: string;
            avatar_url?: string;
            gravatar_id?: string;
            url?: string;
            html_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            starred_url?: string;
            subscriptions_url?: string;
            organizations_url?: string;
            repos_url?: string;
            events_url?: string;
            received_events_url?: string;
            type?: string;
            site_admin?: boolean;
        };
        private?: boolean;
        html_url?: string;
        description?: string;
        fork?: boolean;
        url?: string;
        archive_url?: string;
        assignees_url?: string;
        blobs_url?: string;
        branches_url?: string;
        collaborators_url?: string;
        comments_url?: string;
        commits_url?: string;
        compare_url?: string;
        contents_url?: string;
        contributors_url?: string;
        deployments_url?: string;
        downloads_url?: string;
        events_url?: string;
        forks_url?: string;
        git_commits_url?: string;
        git_refs_url?: string;
        git_tags_url?: string;
        git_url?: string;
        issue_comment_url?: string;
        issue_events_url?: string;
        issues_url?: string;
        keys_url?: string;
        labels_url?: string;
        languages_url?: string;
        merges_url?: string;
        milestones_url?: string;
        notifications_url?: string;
        pulls_url?: string;
        releases_url?: string;
        ssh_url?: string;
        stargazers_url?: string;
        statuses_url?: string;
        subscribers_url?: string;
        subscription_url?: string;
        tags_url?: string;
        teams_url?: string;
        trees_url?: string;
        clone_url?: string;
        mirror_url?: string;
        hooks_url?: string;
        svn_url?: string;
        homepage?: string;
        language?: string;
        forks_count?: number;
        stargazers_count?: number;
        watchers_count?: number;
        size?: number;
        default_branch?: string;
        open_issues_count?: number;
        is_template?: boolean;
        topics?: string[];
        has_issues?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        has_downloads?: boolean;
        archived?: boolean;
        disabled?: boolean;
        visibility?: string;
        pushed_at?: string;
        created_at?: string;
        updated_at?: string;
        permissions?: {
            admin?: boolean;
            maintain?: boolean;
            push?: boolean;
            triage?: boolean;
            pull?: boolean;
        };
        allow_rebase_merge?: boolean;
        temp_clone_token?: string;
        allow_squash_merge?: boolean;
        allow_auto_merge?: boolean;
        delete_branch_on_merge?: boolean;
        allow_merge_commit?: boolean;
        subscribers_count?: number;
        network_count?: number;
    } | null;
    temp_clone_token?: string;
    /** Whether to allow squash merges for pull requests. */
    allow_squash_merge?: boolean;
    /** Whether to allow AutoMerge to be used on pull requests. */
    allow_auto_merge?: boolean;
    /** Whether to delete head branches when pull requests are merged */
    delete_branch_on_merge?: boolean;
    /** Whether to allow merge commits for pull requests. */
    allow_merge_commit?: boolean;
    /** Whether to allow forking this repo */
    allow_forking?: boolean;
    subscribers_count?: number;
    network_count?: number;
    open_issues: number;
    watchers: number;
    master_branch?: string;
    starred_at?: string;
};
/** Authentication token for a GitHub App installed on a user or org. */
export type InstallationToken = {
    token: string;
    expires_at: string;
    permissions?: AppPermissions;
    repository_selection?: "all" | "selected";
    repositories?: Repository[];
    single_file?: string;
    has_multiple_single_files?: boolean;
    single_file_paths?: string[];
};
/** The authorization associated with an OAuth Access. */
export type ApplicationGrant = {
    id: number;
    url: string;
    app: {
        client_id: string;
        name: string;
        url: string;
    };
    created_at: string;
    updated_at: string;
    scopes: string[];
    user?: NullableSimpleUser;
};
export type NullableScopedInstallation = {
    permissions: AppPermissions;
    /** Describe whether all repositories have been selected or there's a selection involved */
    repository_selection: "all" | "selected";
    single_file_name: string | null;
    has_multiple_single_files?: boolean;
    single_file_paths?: string[];
    repositories_url: string;
    account: SimpleUser;
} | null;
/** The authorization for an OAuth app, GitHub App, or a Personal Access Token. */
export type Authorization = {
    id: number;
    url: string;
    /** A list of scopes that this authorization is in. */
    scopes: string[] | null;
    token: string;
    token_last_eight: string | null;
    hashed_token: string | null;
    app: {
        client_id: string;
        name: string;
        url: string;
    };
    note: string | null;
    note_url: string | null;
    updated_at: string;
    created_at: string;
    fingerprint: string | null;
    user?: NullableSimpleUser;
    installation?: NullableScopedInstallation;
    expires_at: string | null;
};
/** Code Of Conduct */
export type CodeOfConduct = {
    key: string;
    name: string;
    url: string;
    body?: string;
    html_url: string | null;
};
/** The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`. */
export type EnabledOrganizations = "all" | "none" | "selected";
/** The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`. */
export type AllowedActions = "all" | "local_only" | "selected";
/** The API URL to use to get or set the actions that are allowed to run, when `allowed_actions` is set to `selected`. */
export type SelectedActionsUrl = string;
export type ActionsEnterprisePermissions = {
    enabled_organizations: EnabledOrganizations;
    /** The API URL to use to get or set the selected organizations that are allowed to run GitHub Actions, when `enabled_organizations` is set to `selected`. */
    selected_organizations_url?: string;
    allowed_actions?: AllowedActions;
    selected_actions_url?: SelectedActionsUrl;
};
/** Organization Simple */
export type OrganizationSimple = {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string | null;
};
export type SelectedActions = {
    /** Whether GitHubOwned actions are allowed. For example, this includes the actions in the `actions` organization. */
    github_owned_allowed?: boolean;
    /** Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators. */
    verified_allowed?: boolean;
    /** Specifies a list of stringMatching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`." */
    patterns_allowed?: string[];
};
export type RunnerGroupsEnterprise = {
    id: number;
    name: string;
    visibility: string;
    default: boolean;
    selected_organizations_url?: string;
    runners_url: string;
    allows_public_repositories: boolean;
};
/** A self hosted runner */
export type Runner = {
    /** The id of the runner. */
    id: number;
    /** The name of the runner. */
    name: string;
    /** The Operating System of the runner. */
    os: string;
    /** The status of the runner. */
    status: string;
    busy: boolean;
    labels: {
        /** Unique identifier of the label. */
        id?: number;
        /** Name of the label. */
        name?: string;
        /** The type of label. ReadOnly labels are applied automatically when the runner is configured. */
        type?: "readOnly" | "custom";
    }[];
};
/** Runner Application */
export type RunnerApplication = {
    os: string;
    architecture: string;
    download_url: string;
    filename: string;
    /** A short lived bearer token used to download the runner, if needed. */
    temp_download_token?: string;
    sha256_checksum?: string;
};
/** Authentication Token */
export type AuthenticationToken = {
    /** The token used for authentication */
    token: string;
    /** The time this token expires */
    expires_at: string;
    permissions?: { [key: string]: unknown };
    /** The repositories this token has access to */
    repositories?: Repository[];
    single_file?: string | null;
    /** Describe whether all repositories have been selected or there's a selection involved */
    repository_selection?: "all" | "selected";
};
export type AuditLogEvent = {
    /** The time the audit log event occurred, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time). */
    "@timestamp"?: number;
    /** The name of the action that was performed, for example `user.login` or `repo.create`. */
    action?: string;
    active?: boolean;
    active_was?: boolean;
    /** The actor who performed the action. */
    actor?: string;
    /** The id of the actor who performed the action. */
    actor_id?: number;
    actor_location?: {
        country_name?: string;
    };
    data?: { [key: string]: unknown };
    org_id?: number;
    /** The username of the account being blocked. */
    blocked_user?: string;
    business?: string;
    config?: unknown[];
    config_was?: unknown[];
    content_type?: string;
    /** The time the audit log event was recorded, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time). */
    created_at?: number;
    deploy_key_fingerprint?: string;
    /** A unique identifier for an audit event. */
    _document_id?: string;
    emoji?: string;
    events?: unknown[];
    events_were?: unknown[];
    explanation?: string;
    fingerprint?: string;
    hook_id?: number;
    limited_availability?: boolean;
    message?: string;
    name?: string;
    old_user?: string;
    openssh_public_key?: string;
    org?: string;
    previous_visibility?: string;
    read_only?: boolean;
    /** The name of the repository. */
    repo?: string;
    /** The name of the repository. */
    repository?: string;
    repository_public?: boolean;
    target_login?: string;
    team?: string;
    /** The type of protocol (for example, HTTP or SSH) used to transfer Git data. */
    transport_protocol?: number;
    /** A human readable name for the protocol (for example, HTTP or SSH) used to transfer Git data. */
    transport_protocol_name?: string;
    /** The user that was affected by the action performed (if available). */
    user?: string;
    /** The repository visibility, for example `public` or `private`. */
    visibility?: string;
};
export type ActionsBillingUsage = {
    /** The sum of the free and paid GitHub Actions minutes used. */
    total_minutes_used: number;
    /** The total paid GitHub Actions minutes used. */
    total_paid_minutes_used: number;
    /** The amount of free GitHub Actions minutes available. */
    included_minutes: number;
    minutes_used_breakdown: {
        /** Total minutes used on Ubuntu runner machines. */
        UBUNTU?: number;
        /** Total minutes used on macOS runner machines. */
        MACOS?: number;
        /** Total minutes used on Windows runner machines. */
        WINDOWS?: number;
    };
};
export type PackagesBillingUsage = {
    /** Sum of the free and paid storage space (GB) for GitHuub Packages. */
    total_gigabytes_bandwidth_used: number;
    /** Total paid storage space (GB) for GitHuub Packages. */
    total_paid_gigabytes_bandwidth_used: number;
    /** Free storage space (GB) for GitHub Packages. */
    included_gigabytes_bandwidth: number;
};
export type CombinedBillingUsage = {
    /** Numbers of days left in billing cycle. */
    days_left_in_billing_cycle: number;
    /** Estimated storage space (GB) used in billing cycle. */
    estimated_paid_storage_for_month: number;
    /** Estimated sum of free and paid storage space (GB) used in billing cycle. */
    estimated_storage_for_month: number;
};
/** Actor */
export type Actor = {
    id: number;
    login: string;
    display_login?: string;
    gravatar_id: string | null;
    url: string;
    avatar_url: string;
};
/** A collection of related issues and pull requests. */
export type NullableMilestone = {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    node_id: string;
    /** The number of the milestone. */
    number: number;
    /** The state of the milestone. */
    state: "open" | "closed";
    /** The title of the milestone. */
    title: string;
    description: string | null;
    creator: NullableSimpleUser;
    open_issues: number;
    closed_issues: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    due_on: string | null;
} | null;
/** GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and builtIn webhooks. GitHub apps are first class actors within GitHub. */
export type NullableIntegration = {
    /** Unique identifier of the GitHub app */
    id: number;
    /** The slug name of the GitHub app */
    slug?: string;
    node_id: string;
    owner: NullableSimpleUser;
    /** The name of the GitHub app */
    name: string;
    description: string | null;
    external_url: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    /** The set of permissions for the GitHub app */
    permissions: {
        issues?: string;
        checks?: string;
        metadata?: string;
        contents?: string;
        deployments?: string;
    } & { [key: string]: string };
    /** The list of events for the GitHub app */
    events: string[];
    /** The number of installations associated with the GitHub app */
    installations_count?: number;
    client_id?: string;
    client_secret?: string;
    webhook_secret?: string | null;
    pem?: string;
} | null;
/** How the author is associated with the repository. */
export type Author_association =
    | "COLLABORATOR"
    | "CONTRIBUTOR"
    | "FIRST_TIMER"
    | "FIRST_TIME_CONTRIBUTOR"
    | "MANNEQUIN"
    | "MEMBER"
    | "NONE"
    | "OWNER";
export type ReactionRollup = {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    confused: number;
    heart: number;
    hooray: number;
    eyes: number;
    rocket: number;
};
/** Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. */
export type Issue = {
    id: number;
    node_id: string;
    /** URL for the issue */
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    /** Number uniquely identifying the issue within its repository */
    number: number;
    /** State of the issue; either 'open' or 'closed' */
    state: string;
    /** Title of the issue */
    title: string;
    /** Contents of the issue */
    body?: string | null;
    user: NullableSimpleUser;
    /** Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository */
    labels: (
        | string
        | {
            id?: number;
            node_id?: string;
            url?: string;
            name?: string;
            description?: string | null;
            color?: string | null;
            default?: boolean;
        }
    )[];
    assignee: NullableSimpleUser;
    assignees?: SimpleUser[] | null;
    milestone: NullableMilestone;
    locked: boolean;
    active_lock_reason?: string | null;
    comments: number;
    pull_request?: {
        merged_at?: string | null;
        diff_url: string | null;
        html_url: string | null;
        patch_url: string | null;
        url: string | null;
    };
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    closed_by?: NullableSimpleUser;
    body_html?: string;
    body_text?: string;
    timeline_url?: string;
    repository?: Repository;
    performed_via_github_app?: NullableIntegration;
    author_association: Author_association;
    reactions?: ReactionRollup;
};
/** Comments provide a way for people to collaborate on an issue. */
export type IssueComment = {
    /** Unique identifier of the issue comment */
    id: number;
    node_id: string;
    /** URL for the issue comment */
    url: string;
    /** Contents of the issue comment */
    body?: string;
    body_text?: string;
    body_html?: string;
    html_url: string;
    user: NullableSimpleUser;
    created_at: string;
    updated_at: string;
    issue_url: string;
    author_association: Author_association;
    performed_via_github_app?: NullableIntegration;
    reactions?: ReactionRollup;
};
/** Event */
export type Event = {
    id: string;
    type: string | null;
    actor: Actor;
    repo: {
        id: number;
        name: string;
        url: string;
    };
    org?: Actor;
    payload: {
        action?: string;
        issue?: Issue;
        comment?: IssueComment;
        pages?: {
            page_name?: string;
            title?: string;
            summary?: string | null;
            action?: string;
            sha?: string;
            html_url?: string;
        }[];
    };
    public: boolean;
    created_at: string | null;
};
/** Hypermedia Link with Type */
export type LinkWithType = {
    href: string;
    type: string;
};
/** Feed */
export type Feed = {
    timeline_url: string;
    user_url: string;
    current_user_public_url?: string;
    current_user_url?: string;
    current_user_actor_url?: string;
    current_user_organization_url?: string;
    current_user_organization_urls?: string[];
    security_advisories_url?: string;
    _links: {
        timeline: LinkWithType;
        user: LinkWithType;
        security_advisories?: LinkWithType;
        current_user?: LinkWithType;
        current_user_public?: LinkWithType;
        current_user_actor?: LinkWithType;
        current_user_organization?: LinkWithType;
        current_user_organizations?: LinkWithType[];
    };
};
/** Base Gist */
export type BaseGist = {
    url: string;
    forks_url: string;
    commits_url: string;
    id: string;
    node_id: string;
    git_pull_url: string;
    git_push_url: string;
    html_url: string;
    files: {
        [key: string]: {
            filename?: string;
            type?: string;
            language?: string;
            raw_url?: string;
            size?: number;
        };
    };
    public: boolean;
    created_at: string;
    updated_at: string;
    description: string | null;
    comments: number;
    user: NullableSimpleUser;
    comments_url: string;
    owner?: SimpleUser;
    truncated?: boolean;
    forks?: unknown[];
    history?: unknown[];
};
/** Public User */
export type PublicUser = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username?: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    plan?: {
        collaborators: number;
        name: string;
        space: number;
        private_repos: number;
    };
    suspended_at?: string | null;
    private_gists?: number;
    total_private_repos?: number;
    owned_private_repos?: number;
    disk_usage?: number;
    collaborators?: number;
};
/** Gist History */
export type GistHistory = {
    user?: NullableSimpleUser;
    version?: string;
    committed_at?: string;
    change_status?: {
        total?: number;
        additions?: number;
        deletions?: number;
    };
    url?: string;
};
/** Gist Simple */
export type GistSimple = {
    forks?:
    | {
        id?: string;
        url?: string;
        user?: PublicUser;
        created_at?: string;
        updated_at?: string;
    }[]
    | null;
    history?: GistHistory[] | null;
    /** Gist */
    fork_of?: {
        url: string;
        forks_url: string;
        commits_url: string;
        id: string;
        node_id: string;
        git_pull_url: string;
        git_push_url: string;
        html_url: string;
        files: {
            [key: string]: {
                filename?: string;
                type?: string;
                language?: string;
                raw_url?: string;
                size?: number;
            };
        };
        public: boolean;
        created_at: string;
        updated_at: string;
        description: string | null;
        comments: number;
        user: NullableSimpleUser;
        comments_url: string;
        owner?: NullableSimpleUser;
        truncated?: boolean;
        forks?: unknown[];
        history?: unknown[];
    } | null;
    url?: string;
    forks_url?: string;
    commits_url?: string;
    id?: string;
    node_id?: string;
    git_pull_url?: string;
    git_push_url?: string;
    html_url?: string;
    files?: {
        [key: string]: {
            filename?: string;
            type?: string;
            language?: string;
            raw_url?: string;
            size?: number;
            truncated?: boolean;
            content?: string;
        } | null;
    };
    public?: boolean;
    created_at?: string;
    updated_at?: string;
    description?: string | null;
    comments?: number;
    user?: string | null;
    comments_url?: string;
    owner?: SimpleUser;
    truncated?: boolean;
};
/** A comment made to a gist. */
export type GistComment = {
    id: number;
    node_id: string;
    url: string;
    /** The comment text. */
    body: string;
    user: NullableSimpleUser;
    created_at: string;
    updated_at: string;
    author_association: Author_association;
};
/** Gist Commit */
export type GistCommit = {
    url: string;
    version: string;
    user: NullableSimpleUser;
    change_status: {
        total?: number;
        additions?: number;
        deletions?: number;
    };
    committed_at: string;
};
/** Gitignore Template */
export type GitignoreTemplate = {
    name: string;
    source: string;
};
/** License Simple */
export type LicenseSimple = {
    key: string;
    name: string;
    url: string | null;
    spdx_id: string | null;
    node_id: string;
    html_url?: string;
};
/** License */
export type License = {
    key: string;
    name: string;
    spdx_id: string | null;
    url: string | null;
    node_id: string;
    html_url: string;
    description: string;
    implementation: string;
    permissions: string[];
    conditions: string[];
    limitations: string[];
    body: string;
    featured: boolean;
};
/** Marketplace Listing Plan */
export type MarketplaceListingPlan = {
    url: string;
    accounts_url: string;
    id: number;
    number: number;
    name: string;
    description: string;
    monthly_price_in_cents: number;
    yearly_price_in_cents: number;
    price_model: string;
    has_free_trial: boolean;
    unit_name: string | null;
    state: string;
    bullets: string[];
};
/** Marketplace Purchase */
export type MarketplacePurchase = {
    url: string;
    type: string;
    id: number;
    login: string;
    organization_billing_email?: string;
    email?: string | null;
    marketplace_pending_change?: {
        is_installed?: boolean;
        effective_date?: string;
        unit_count?: number | null;
        id?: number;
        plan?: MarketplaceListingPlan;
    } | null;
    marketplace_purchase: {
        billing_cycle?: string;
        next_billing_date?: string | null;
        is_installed?: boolean;
        unit_count?: number | null;
        on_free_trial?: boolean;
        free_trial_ends_on?: string | null;
        updated_at?: string;
        plan?: MarketplaceListingPlan;
    };
};
/** Api Overview */
export type ApiOverview = {
    verifiable_password_authentication: boolean;
    ssh_key_fingerprints?: {
        SHA256_RSA?: string;
        SHA256_DSA?: string;
        SHA256_ECDSA?: string;
        SHA256_ED25519?: string;
    };
    hooks?: string[];
    web?: string[];
    api?: string[];
    git?: string[];
    packages?: string[];
    pages?: string[];
    importer?: string[];
    actions?: string[];
    dependabot?: string[];
};
/** A git repository */
export type NullableRepository = {
    /** Unique identifier of the repository */
    id: number;
    node_id: string;
    /** The name of the repository. */
    name: string;
    full_name: string;
    license: NullableLicenseSimple;
    organization?: NullableSimpleUser;
    forks: number;
    permissions?: {
        admin: boolean;
        pull: boolean;
        triage?: boolean;
        push: boolean;
        maintain?: boolean;
    };
    owner: SimpleUser;
    /** Whether the repository is private or public. */
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url: string;
    mirror_url: string | null;
    hooks_url: string;
    svn_url: string;
    homepage: string | null;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    /** The default branch of the repository. */
    default_branch: string;
    open_issues_count: number;
    /** Whether this repository acts as a template that can be used to generate new repositories. */
    is_template?: boolean;
    topics?: string[];
    /** Whether issues are enabled. */
    has_issues: boolean;
    /** Whether projects are enabled. */
    has_projects: boolean;
    /** Whether the wiki is enabled. */
    has_wiki: boolean;
    has_pages: boolean;
    /** Whether downloads are enabled. */
    has_downloads: boolean;
    /** Whether the repository is archived. */
    archived: boolean;
    /** Returns whether or not this repository disabled. */
    disabled: boolean;
    /** The repository visibility: public, private, or internal. */
    visibility?: string;
    pushed_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    /** Whether to allow rebase merges for pull requests. */
    allow_rebase_merge?: boolean;
    template_repository?: {
        id?: number;
        node_id?: string;
        name?: string;
        full_name?: string;
        owner?: {
            login?: string;
            id?: number;
            node_id?: string;
            avatar_url?: string;
            gravatar_id?: string;
            url?: string;
            html_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            starred_url?: string;
            subscriptions_url?: string;
            organizations_url?: string;
            repos_url?: string;
            events_url?: string;
            received_events_url?: string;
            type?: string;
            site_admin?: boolean;
        };
        private?: boolean;
        html_url?: string;
        description?: string;
        fork?: boolean;
        url?: string;
        archive_url?: string;
        assignees_url?: string;
        blobs_url?: string;
        branches_url?: string;
        collaborators_url?: string;
        comments_url?: string;
        commits_url?: string;
        compare_url?: string;
        contents_url?: string;
        contributors_url?: string;
        deployments_url?: string;
        downloads_url?: string;
        events_url?: string;
        forks_url?: string;
        git_commits_url?: string;
        git_refs_url?: string;
        git_tags_url?: string;
        git_url?: string;
        issue_comment_url?: string;
        issue_events_url?: string;
        issues_url?: string;
        keys_url?: string;
        labels_url?: string;
        languages_url?: string;
        merges_url?: string;
        milestones_url?: string;
        notifications_url?: string;
        pulls_url?: string;
        releases_url?: string;
        ssh_url?: string;
        stargazers_url?: string;
        statuses_url?: string;
        subscribers_url?: string;
        subscription_url?: string;
        tags_url?: string;
        teams_url?: string;
        trees_url?: string;
        clone_url?: string;
        mirror_url?: string;
        hooks_url?: string;
        svn_url?: string;
        homepage?: string;
        language?: string;
        forks_count?: number;
        stargazers_count?: number;
        watchers_count?: number;
        size?: number;
        default_branch?: string;
        open_issues_count?: number;
        is_template?: boolean;
        topics?: string[];
        has_issues?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        has_downloads?: boolean;
        archived?: boolean;
        disabled?: boolean;
        visibility?: string;
        pushed_at?: string;
        created_at?: string;
        updated_at?: string;
        permissions?: {
            admin?: boolean;
            maintain?: boolean;
            push?: boolean;
            triage?: boolean;
            pull?: boolean;
        };
        allow_rebase_merge?: boolean;
        temp_clone_token?: string;
        allow_squash_merge?: boolean;
        allow_auto_merge?: boolean;
        delete_branch_on_merge?: boolean;
        allow_merge_commit?: boolean;
        subscribers_count?: number;
        network_count?: number;
    } | null;
    temp_clone_token?: string;
    /** Whether to allow squash merges for pull requests. */
    allow_squash_merge?: boolean;
    /** Whether to allow AutoMerge to be used on pull requests. */
    allow_auto_merge?: boolean;
    /** Whether to delete head branches when pull requests are merged */
    delete_branch_on_merge?: boolean;
    /** Whether to allow merge commits for pull requests. */
    allow_merge_commit?: boolean;
    /** Whether to allow forking this repo */
    allow_forking?: boolean;
    subscribers_count?: number;
    network_count?: number;
    open_issues: number;
    watchers: number;
    master_branch?: string;
    starred_at?: string;
} | null;
/** Minimal Repository */
export type MinimalRepository = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: SimpleUser;
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url?: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url?: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url?: string;
    mirror_url?: string | null;
    hooks_url: string;
    svn_url?: string;
    homepage?: string | null;
    language?: string | null;
    forks_count?: number;
    stargazers_count?: number;
    watchers_count?: number;
    size?: number;
    default_branch?: string;
    open_issues_count?: number;
    is_template?: boolean;
    topics?: string[];
    has_issues?: boolean;
    has_projects?: boolean;
    has_wiki?: boolean;
    has_pages?: boolean;
    has_downloads?: boolean;
    archived?: boolean;
    disabled?: boolean;
    visibility?: string;
    pushed_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    permissions?: {
        admin?: boolean;
        maintain?: boolean;
        push?: boolean;
        triage?: boolean;
        pull?: boolean;
    };
    template_repository?: NullableRepository;
    temp_clone_token?: string;
    delete_branch_on_merge?: boolean;
    subscribers_count?: number;
    network_count?: number;
    code_of_conduct?: CodeOfConduct;
    license?: {
        key?: string;
        name?: string;
        spdx_id?: string;
        url?: string;
        node_id?: string;
    } | null;
    forks?: number;
    open_issues?: number;
    watchers?: number;
    allow_forking?: boolean;
};
/** Thread */
export type Thread = {
    id: string;
    repository: MinimalRepository;
    subject: {
        title: string;
        url: string;
        latest_comment_url: string;
        type: string;
    };
    reason: string;
    unread: boolean;
    updated_at: string;
    last_read_at: string | null;
    url: string;
    subscription_url: string;
};
/** Thread Subscription */
export type ThreadSubscription = {
    subscribed: boolean;
    ignored: boolean;
    reason: string | null;
    created_at: string | null;
    url: string;
    thread_url?: string;
    repository_url?: string;
};
/** Organization Full */
export type OrganizationFull = {
    login: string;
    id: number;
    node_id: string;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string | null;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    twitter_username?: string | null;
    is_verified?: boolean;
    has_organization_projects: boolean;
    has_repository_projects: boolean;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    html_url: string;
    created_at: string;
    type: string;
    total_private_repos?: number;
    owned_private_repos?: number;
    private_gists?: number | null;
    disk_usage?: number | null;
    collaborators?: number | null;
    billing_email?: string | null;
    plan?: {
        name: string;
        space: number;
        private_repos: number;
        filled_seats?: number;
        seats?: number;
    };
    default_repository_permission?: string | null;
    members_can_create_repositories?: boolean | null;
    two_factor_requirement_enabled?: boolean | null;
    members_allowed_repository_creation_type?: string;
    members_can_create_public_repositories?: boolean;
    members_can_create_private_repositories?: boolean;
    members_can_create_internal_repositories?: boolean;
    members_can_create_pages?: boolean;
    members_can_create_public_pages?: boolean;
    members_can_create_private_pages?: boolean;
    updated_at: string;
};
/** The policy that controls the repositories in the organization that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`. */
export type EnabledRepositories = "all" | "none" | "selected";
export type ActionsOrganizationPermissions = {
    enabled_repositories: EnabledRepositories;
    /** The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`. */
    selected_repositories_url?: string;
    allowed_actions?: AllowedActions;
    selected_actions_url?: SelectedActionsUrl;
};
export type RunnerGroupsOrg = {
    id: number;
    name: string;
    visibility: string;
    default: boolean;
    /** Link to the selected repositories resource for this runner group. Not present unless visibility was set to `selected` */
    selected_repositories_url?: string;
    runners_url: string;
    inherited: boolean;
    inherited_allows_public_repositories?: boolean;
    allows_public_repositories: boolean;
};
/** Secrets for GitHub Actions for an organization. */
export type OrganizationActionsSecret = {
    /** The name of the secret. */
    name: string;
    created_at: string;
    updated_at: string;
    /** Visibility of a secret */
    visibility: "all" | "private" | "selected";
    selected_repositories_url?: string;
};
/** The public key used for setting Actions Secrets. */
export type ActionsPublicKey = {
    /** The identifier for the key. */
    key_id: string;
    /** The Base64 encoded public key. */
    key: string;
    id?: number;
    url?: string;
    title?: string;
    created_at?: string;
};
/** An object without any properties. */
export type EmptyObject = { [key: string]: unknown };
/** Credential Authorization */
export type CredentialAuthorization = {
    /** User login that owns the underlying credential. */
    login: string;
    /** Unique identifier for the credential. */
    credential_id: number;
    /** HumanReadable description of the credential type. */
    credential_type: string;
    /** Last eight characters of the credential. Only included in responses with credential_type of personal access token. */
    token_last_eight?: string;
    /** Date when the credential was authorized for use. */
    credential_authorized_at: string;
    /** List of oauth scopes the token has been granted. */
    scopes?: string[];
    /** Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key. */
    fingerprint?: string;
    /** Date when the credential was last accessed. May be null if it was never accessed */
    credential_accessed_at?: string | null;
    authorized_credential_id?: number | null;
    /** The title given to the ssh key. This will only be present when the credential is an ssh key. */
    authorized_credential_title?: string | null;
    /** The note given to the token. This will only be present when the credential is a token. */
    authorized_credential_note?: string | null;
};
/** Organization Invitation */
export type OrganizationInvitation = {
    id: number;
    login: string | null;
    email: string | null;
    role: string;
    created_at: string;
    failed_at?: string | null;
    failed_reason?: string | null;
    inviter: SimpleUser;
    team_count: number;
    node_id: string;
    invitation_teams_url: string;
};
/** Org Hook */
export type OrgHook = {
    id: number;
    url: string;
    ping_url: string;
    deliveries_url?: string;
    name: string;
    events: string[];
    active: boolean;
    config: {
        url?: string;
        insecure_ssl?: string;
        content_type?: string;
        secret?: string;
    };
    updated_at: string;
    created_at: string;
    type: string;
};
/** The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`. */
export type InteractionGroup =
    | "existing_users"
    | "contributors_only"
    | "collaborators_only";
/** Interaction limit settings. */
export type InteractionLimitResponse = {
    limit: InteractionGroup;
    origin: string;
    expires_at: string;
};
/** The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`. */
export type InteractionExpiry =
    | "one_day"
    | "three_days"
    | "one_week"
    | "one_month"
    | "six_months";
/** Limit interactions to a specific type of user for a specified duration */
export type InteractionLimit = {
    limit: InteractionGroup;
    expiry?: InteractionExpiry;
};
/** Groups of organization members that gives permissions on specified repositories. */
export type NullableTeamSimple = {
    /** Unique identifier of the team */
    id: number;
    node_id: string;
    /** URL for the team */
    url: string;
    members_url: string;
    /** Name of the team */
    name: string;
    /** Description of the team */
    description: string | null;
    /** Permission that the team will have for its repositories */
    permission: string;
    /** The level of privacy this team should have */
    privacy?: string;
    html_url: string;
    repositories_url: string;
    slug: string;
    /** Distinguished Name (DN) that team maps to within LDAP environment */
    ldap_dn?: string;
} | null;
/** Groups of organization members that gives permissions on specified repositories. */
export type Team = {
    id: number;
    node_id: string;
    name: string;
    slug: string;
    description: string | null;
    privacy?: string;
    permission: string;
    permissions?: {
        pull: boolean;
        triage: boolean;
        push: boolean;
        maintain: boolean;
        admin: boolean;
    };
    url: string;
    html_url: string;
    members_url: string;
    repositories_url: string;
    parent: NullableTeamSimple;
};
/** Org Membership */
export type OrgMembership = {
    url: string;
    /** The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation. */
    state: "active" | "pending";
    /** The user's membership type in the organization. */
    role: "admin" | "member" | "billing_manager";
    organization_url: string;
    organization: OrganizationSimple;
    user: NullableSimpleUser;
    permissions?: {
        can_create_repository: boolean;
    };
};
/** A migration. */
export type Migration = {
    id: number;
    owner: NullableSimpleUser;
    guid: string;
    state: string;
    lock_repositories: boolean;
    exclude_metadata: boolean;
    exclude_git_data: boolean;
    exclude_attachments: boolean;
    exclude_releases: boolean;
    exclude_owner_projects: boolean;
    repositories: Repository[];
    url: string;
    created_at: string;
    updated_at: string;
    node_id: string;
    archive_url?: string;
    exclude?: unknown[];
};
/** Minimal Repository */
export type NullableMinimalRepository = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: SimpleUser;
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url?: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url?: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url?: string;
    mirror_url?: string | null;
    hooks_url: string;
    svn_url?: string;
    homepage?: string | null;
    language?: string | null;
    forks_count?: number;
    stargazers_count?: number;
    watchers_count?: number;
    size?: number;
    default_branch?: string;
    open_issues_count?: number;
    is_template?: boolean;
    topics?: string[];
    has_issues?: boolean;
    has_projects?: boolean;
    has_wiki?: boolean;
    has_pages?: boolean;
    has_downloads?: boolean;
    archived?: boolean;
    disabled?: boolean;
    visibility?: string;
    pushed_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    permissions?: {
        admin?: boolean;
        maintain?: boolean;
        push?: boolean;
        triage?: boolean;
        pull?: boolean;
    };
    template_repository?: NullableRepository;
    temp_clone_token?: string;
    delete_branch_on_merge?: boolean;
    subscribers_count?: number;
    network_count?: number;
    code_of_conduct?: CodeOfConduct;
    license?: {
        key?: string;
        name?: string;
        spdx_id?: string;
        url?: string;
        node_id?: string;
    } | null;
    forks?: number;
    open_issues?: number;
    watchers?: number;
    allow_forking?: boolean;
} | null;
/** A software package */
export type Package = {
    /** Unique identifier of the package. */
    id: number;
    /** The name of the package. */
    name: string;
    package_type:
    | "npm"
    | "maven"
    | "rubygems"
    | "docker"
    | "nuget"
    | "container";
    url: string;
    html_url: string;
    /** The number of versions of the package. */
    version_count: number;
    visibility: "private" | "public";
    owner?: NullableSimpleUser;
    repository?: NullableMinimalRepository;
    created_at: string;
    updated_at: string;
};
/** A version of a software package */
export type PackageVersion = {
    /** Unique identifier of the package version. */
    id: number;
    /** The name of the package version. */
    name: string;
    url: string;
    package_html_url: string;
    html_url?: string;
    license?: string;
    description?: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    metadata?: {
        package_type:
        | "npm"
        | "maven"
        | "rubygems"
        | "docker"
        | "nuget"
        | "container";
        container?: {
            tags: unknown[];
        };
        docker?: {
            tag?: unknown[];
        } & {
            tags: unknown;
        };
    };
};
/** Projects are a way to organize columns and cards of work. */
export type Project = {
    owner_url: string;
    url: string;
    html_url: string;
    columns_url: string;
    id: number;
    node_id: string;
    /** Name of the project */
    name: string;
    /** Body of the project */
    body: string | null;
    number: number;
    /** State of the project; either 'open' or 'closed' */
    state: string;
    creator: NullableSimpleUser;
    created_at: string;
    updated_at: string;
    /** The baseline permission that all organization members have on this project. Only present if owner is an organization. */
    organization_permission?: "read" | "write" | "admin" | "none";
    /** Whether or not this project can be seen by everyone. Only present if owner is an organization. */
    private?: boolean;
};
/** The security alert number. */
export type AlertNumber = number;
/** The time that the alert was created in ISO 8601 format: `YYYYMMDDTHH:MM:SSZ`. */
export type AlertCreatedAt = string;
/** The REST API URL of the alert resource. */
export type AlertUrl = string;
/** The GitHub URL of the alert resource. */
export type AlertHtmlUrl = string;
/** Sets the state of the secret scanning alert. Can be either `open` or `resolved`. You must provide `resolution` when you set the state to `resolved`. */
export type SecretScanningAlertState = "open" | "resolved";
/** **Required when the `state` is `resolved`.** The reason for resolving the alert. Can be one of `false_positive`, `wont_fix`, `revoked`, or `used_in_tests`. */
export type SecretScanningAlertResolution =
    | ("false_positive" | "wont_fix" | "revoked" | "used_in_tests")
    | null;
export type OrganizationSecretScanningAlert = {
    number?: AlertNumber;
    created_at?: AlertCreatedAt;
    url?: AlertUrl;
    html_url?: AlertHtmlUrl;
    /** The REST API URL of the code locations for this alert. */
    locations_url?: string;
    state?: SecretScanningAlertState;
    resolution?: SecretScanningAlertResolution;
    /** The time that the alert was resolved in ISO 8601 format: `YYYYMMDDTHH:MM:SSZ`. */
    resolved_at?: string | null;
    resolved_by?: NullableSimpleUser;
    /** The type of secret that secret scanning detected. */
    secret_type?: string;
    /** The secret that was detected. */
    secret?: string;
    repository?: MinimalRepository;
};
/** External Groups to be mapped to a team for membership */
export type GroupMapping = {
    /** Array of groups to be mapped to this team */
    groups?: {
        /** The ID of the group */
        group_id: string;
        /** The name of the group */
        group_name: string;
        /** a description of the group */
        group_description: string;
        /** synchronization status for this group mapping */
        status?: string;
        /** the time of the last sync for this groupMapping */
        synced_at?: string | null;
    }[];
};
/** Groups of organization members that gives permissions on specified repositories. */
export type TeamFull = {
    /** Unique identifier of the team */
    id: number;
    node_id: string;
    /** URL for the team */
    url: string;
    html_url: string;
    /** Name of the team */
    name: string;
    slug: string;
    description: string | null;
    /** The level of privacy this team should have */
    privacy?: "closed" | "secret";
    /** Permission that the team will have for its repositories */
    permission: string;
    members_url: string;
    repositories_url: string;
    parent?: NullableTeamSimple;
    members_count: number;
    repos_count: number;
    created_at: string;
    updated_at: string;
    organization: OrganizationFull;
    /** Distinguished Name (DN) that team maps to within LDAP environment */
    ldap_dn?: string;
};
/** A team discussion is a persistent record of a freeForm conversation within a team. */
export type TeamDiscussion = {
    author: NullableSimpleUser;
    /** The main text of the discussion. */
    body: string;
    body_html: string;
    /** The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server. */
    body_version: string;
    comments_count: number;
    comments_url: string;
    created_at: string;
    last_edited_at: string | null;
    html_url: string;
    node_id: string;
    /** The unique sequence number of a team discussion. */
    number: number;
    /** Whether or not this discussion should be pinned for easy retrieval. */
    pinned: boolean;
    /** Whether or not this discussion should be restricted to team members and organization administrators. */
    private: boolean;
    team_url: string;
    /** The title of the discussion. */
    title: string;
    updated_at: string;
    url: string;
    reactions?: ReactionRollup;
};
/** A reply to a discussion within a team. */
export type TeamDiscussionComment = {
    author: NullableSimpleUser;
    /** The main text of the comment. */
    body: string;
    body_html: string;
    /** The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server. */
    body_version: string;
    created_at: string;
    last_edited_at: string | null;
    discussion_url: string;
    html_url: string;
    node_id: string;
    /** The unique sequence number of a team discussion comment. */
    number: number;
    updated_at: string;
    url: string;
    reactions?: ReactionRollup;
};
/** Reactions to conversations provide a way to help people express their feelings more simply and effectively. */
export type Reaction = {
    id: number;
    node_id: string;
    user: NullableSimpleUser;
    /** The reaction to use */
    content:
    | "+1"
    | "1"
    | "laugh"
    | "confused"
    | "heart"
    | "hooray"
    | "rocket"
    | "eyes";
    created_at: string;
};
/** Team Membership */
export type TeamMembership = {
    url: string;
    /** The role of the user in the team. */
    role: "member" | "maintainer";
    /** The state of the user's membership in the team. */
    state: "active" | "pending";
};
/** A team's access to a project. */
export type TeamProject = {
    owner_url: string;
    url: string;
    html_url: string;
    columns_url: string;
    id: number;
    node_id: string;
    name: string;
    body: string | null;
    number: number;
    state: string;
    creator: SimpleUser;
    created_at: string;
    updated_at: string;
    /** The organization permission for this project. Only present when owner is an organization. */
    organization_permission?: string;
    /** Whether the project is private or not. Only present when owner is an organization. */
    private?: boolean;
    permissions: {
        read: boolean;
        write: boolean;
        admin: boolean;
    };
};
/** A team's access to a repository. */
export type TeamRepository = {
    /** Unique identifier of the repository */
    id: number;
    node_id: string;
    /** The name of the repository. */
    name: string;
    full_name: string;
    license: NullableLicenseSimple;
    forks: number;
    permissions?: {
        admin: boolean;
        pull: boolean;
        triage?: boolean;
        push: boolean;
        maintain?: boolean;
    };
    owner: NullableSimpleUser;
    /** Whether the repository is private or public. */
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url: string;
    mirror_url: string | null;
    hooks_url: string;
    svn_url: string;
    homepage: string | null;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    /** The default branch of the repository. */
    default_branch: string;
    open_issues_count: number;
    /** Whether this repository acts as a template that can be used to generate new repositories. */
    is_template?: boolean;
    topics?: string[];
    /** Whether issues are enabled. */
    has_issues: boolean;
    /** Whether projects are enabled. */
    has_projects: boolean;
    /** Whether the wiki is enabled. */
    has_wiki: boolean;
    has_pages: boolean;
    /** Whether downloads are enabled. */
    has_downloads: boolean;
    /** Whether the repository is archived. */
    archived: boolean;
    /** Returns whether or not this repository disabled. */
    disabled: boolean;
    /** The repository visibility: public, private, or internal. */
    visibility?: string;
    pushed_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    /** Whether to allow rebase merges for pull requests. */
    allow_rebase_merge?: boolean;
    template_repository?: NullableRepository;
    temp_clone_token?: string;
    /** Whether to allow squash merges for pull requests. */
    allow_squash_merge?: boolean;
    /** Whether to allow AutoMerge to be used on pull requests. */
    allow_auto_merge?: boolean;
    /** Whether to delete head branches when pull requests are merged */
    delete_branch_on_merge?: boolean;
    /** Whether to allow merge commits for pull requests. */
    allow_merge_commit?: boolean;
    /** Whether to allow forking this repo */
    allow_forking?: boolean;
    subscribers_count?: number;
    network_count?: number;
    open_issues: number;
    watchers: number;
    master_branch?: string;
};
/** Project cards represent a scope of work. */
export type ProjectCard = {
    url: string;
    /** The project card's ID */
    id: number;
    node_id: string;
    note: string | null;
    creator: NullableSimpleUser;
    created_at: string;
    updated_at: string;
    /** Whether or not the card is archived */
    archived?: boolean;
    column_name?: string;
    project_id?: string;
    column_url: string;
    content_url?: string;
    project_url: string;
};
/** Project columns contain cards of work. */
export type ProjectColumn = {
    url: string;
    project_url: string;
    cards_url: string;
    /** The unique identifier of the project column */
    id: number;
    node_id: string;
    /** Name of the project column */
    name: string;
    created_at: string;
    updated_at: string;
};
/** Repository Collaborator Permission */
export type RepositoryCollaboratorPermission = {
    permission: string;
    user: NullableSimpleUser;
};
export type RateLimit = {
    limit: number;
    remaining: number;
    reset: number;
    used: number;
};
/** Rate Limit Overview */
export type RateLimitOverview = {
    resources: {
        core: RateLimit;
        graphql?: RateLimit;
        search: RateLimit;
        source_import?: RateLimit;
        integration_manifest?: RateLimit;
        code_scanning_upload?: RateLimit;
        actions_runner_registration?: RateLimit;
    };
    rate: RateLimit;
};
/** Code of Conduct Simple */
export type CodeOfConductSimple = {
    url: string;
    key: string;
    name: string;
    html_url: string | null;
};
/** Full Repository */
export type FullRepository = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: SimpleUser;
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    archive_url: string;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    deployments_url: string;
    downloads_url: string;
    events_url: string;
    forks_url: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    languages_url: string;
    merges_url: string;
    milestones_url: string;
    notifications_url: string;
    pulls_url: string;
    releases_url: string;
    ssh_url: string;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    tags_url: string;
    teams_url: string;
    trees_url: string;
    clone_url: string;
    mirror_url: string | null;
    hooks_url: string;
    svn_url: string;
    homepage: string | null;
    language: string | null;
    forks_count: number;
    stargazers_count: number;
    watchers_count: number;
    size: number;
    default_branch: string;
    open_issues_count: number;
    is_template?: boolean;
    topics?: string[];
    has_issues: boolean;
    has_projects: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_downloads: boolean;
    archived: boolean;
    /** Returns whether or not this repository disabled. */
    disabled: boolean;
    /** The repository visibility: public, private, or internal. */
    visibility?: string;
    pushed_at: string;
    created_at: string;
    updated_at: string;
    permissions?: {
        admin: boolean;
        maintain?: boolean;
        push: boolean;
        triage?: boolean;
        pull: boolean;
    };
    allow_rebase_merge?: boolean;
    template_repository?: NullableRepository;
    temp_clone_token?: string | null;
    allow_squash_merge?: boolean;
    allow_auto_merge?: boolean;
    delete_branch_on_merge?: boolean;
    allow_merge_commit?: boolean;
    allow_forking?: boolean;
    subscribers_count: number;
    network_count: number;
    license: NullableLicenseSimple;
    organization?: NullableSimpleUser;
    parent?: Repository;
    source?: Repository;
    forks: number;
    master_branch?: string;
    open_issues: number;
    watchers: number;
    /** Whether anonymous git access is allowed. */
    anonymous_access_enabled?: boolean;
    code_of_conduct?: CodeOfConductSimple;
    security_and_analysis?: {
        advanced_security?: {
            status?: "enabled" | "disabled";
        };
        secret_scanning?: {
            status?: "enabled" | "disabled";
        };
    } | null;
};
/** An artifact */
export type Artifact = {
    id: number;
    node_id: string;
    /** The name of the artifact. */
    name: string;
    /** The size in bytes of the artifact. */
    size_in_bytes: number;
    url: string;
    archive_download_url: string;
    /** Whether or not the artifact has expired. */
    expired: boolean;
    created_at: string | null;
    expires_at: string | null;
    updated_at: string | null;
};
/** Information of a job execution in a workflow run */
export type Job = {
    /** The id of the job. */
    id: number;
    /** The id of the associated workflow run. */
    run_id: number;
    run_url: string;
    /** Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was reRun. */
    run_attempt?: number;
    node_id: string;
    /** The SHA of the commit that is being run. */
    head_sha: string;
    url: string;
    html_url: string | null;
    /** The phase of the lifecycle that the job is currently in. */
    status: "queued" | "in_progress" | "completed";
    /** The outcome of the job. */
    conclusion: string | null;
    /** The time that the job started, in ISO 8601 format. */
    started_at: string;
    /** The time that the job finished, in ISO 8601 format. */
    completed_at: string | null;
    /** The name of the job. */
    name: string;
    /** Steps in this job. */
    steps?: {
        /** The phase of the lifecycle that the job is currently in. */
        status: "queued" | "in_progress" | "completed";
        /** The outcome of the job. */
        conclusion: string | null;
        /** The name of the job. */
        name: string;
        number: number;
        /** The time that the step started, in ISO 8601 format. */
        started_at?: string | null;
        /** The time that the job finished, in ISO 8601 format. */
        completed_at?: string | null;
    }[];
    check_run_url: string;
    /** Labels for the workflow job. Specified by the "runs_on" attribute in the action's workflow file. */
    labels: string[];
    /** The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.) */
    runner_id: number | null;
    /** The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.) */
    runner_name: string | null;
    /** The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.) */
    runner_group_id: number | null;
    /** The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.) */
    runner_group_name: string | null;
};
/** Whether GitHub Actions is enabled on the repository. */
export type ActionsEnabled = boolean;
export type ActionsRepositoryPermissions = {
    enabled: ActionsEnabled;
    allowed_actions?: AllowedActions;
    selected_actions_url?: SelectedActionsUrl;
};
export type PullRequestMinimal = {
    id: number;
    number: number;
    url: string;
    head: {
        ref: string;
        sha: string;
        repo: {
            id: number;
            url: string;
            name: string;
        };
    };
    base: {
        ref: string;
        sha: string;
        repo: {
            id: number;
            url: string;
            name: string;
        };
    };
};
/** Simple Commit */
export type NullableSimpleCommit = {
    id: string;
    tree_id: string;
    message: string;
    timestamp: string;
    author: {
        name: string;
        email: string;
    } | null;
    committer: {
        name: string;
        email: string;
    } | null;
} | null;
/** An invocation of a workflow */
export type WorkflowRun = {
    /** The ID of the workflow run. */
    id: number;
    /** The name of the workflow run. */
    name?: string | null;
    node_id: string;
    /** The ID of the associated check suite. */
    check_suite_id?: number;
    /** The node ID of the associated check suite. */
    check_suite_node_id?: string;
    head_branch: string | null;
    /** The SHA of the head commit that points to the version of the worflow being run. */
    head_sha: string;
    /** The auto incrementing run number for the workflow run. */
    run_number: number;
    /** Attempt number of the run, 1 for first attempt and higher if the workflow was reRun. */
    run_attempt?: number;
    event: string;
    status: string | null;
    conclusion: string | null;
    /** The ID of the parent workflow. */
    workflow_id: number;
    /** The URL to the workflow run. */
    url: string;
    html_url: string;
    pull_requests: PullRequestMinimal[] | null;
    created_at: string;
    updated_at: string;
    /** The start time of the latest run. Resets on reRun. */
    run_started_at?: string;
    /** The URL to the jobs for the workflow run. */
    jobs_url: string;
    /** The URL to download the logs for the workflow run. */
    logs_url: string;
    /** The URL to the associated check suite. */
    check_suite_url: string;
    /** The URL to the artifacts for the workflow run. */
    artifacts_url: string;
    /** The URL to cancel the workflow run. */
    cancel_url: string;
    /** The URL to rerun the workflow run. */
    rerun_url: string;
    /** The URL to the previous attempted run of this workflow, if one exists. */
    previous_attempt_url?: string | null;
    /** The URL to the workflow. */
    workflow_url: string;
    head_commit: NullableSimpleCommit;
    repository: MinimalRepository;
    head_repository: MinimalRepository;
    head_repository_id?: number;
};
/** An entry in the reviews log for environment deployments */
export type EnvironmentApprovals = {
    /** The list of environments that were approved or rejected */
    environments: {
        /** The id of the environment. */
        id?: number;
        node_id?: string;
        /** The name of the environment. */
        name?: string;
        url?: string;
        html_url?: string;
        /** The time that the environment was created, in ISO 8601 format. */
        created_at?: string;
        /** The time that the environment was last updated, in ISO 8601 format. */
        updated_at?: string;
    }[];
    /** Whether deployment to the environment(s) was approved or rejected */
    state: "approved" | "rejected";
    user: SimpleUser;
    /** The comment submitted with the deployment review */
    comment: string;
};
/** The type of reviewer. Must be one of: `User` or `Team` */
export type DeploymentReviewerType = "User" | "Team";
/** Details of a deployment that is waiting for protection rules to pass */
export type PendingDeployment = {
    environment: {
        /** The id of the environment. */
        id?: number;
        node_id?: string;
        /** The name of the environment. */
        name?: string;
        url?: string;
        html_url?: string;
    };
    /** The set duration of the wait timer */
    wait_timer: number;
    /** The time that the wait timer began. */
    wait_timer_started_at: string | null;
    /** Whether the currently authenticated user can approve the deployment */
    current_user_can_approve: boolean;
    /** The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed. */
    reviewers: {
        type?: DeploymentReviewerType;
        reviewer?: Partial<SimpleUser> &
        Partial<Team>;
    }[];
};
/** A request for a specific ref(branch,sha,tag) to be deployed */
export type Deployment = {
    url: string;
    /** Unique identifier of the deployment */
    id: number;
    node_id: string;
    sha: string;
    /** The ref to deploy. This can be a branch, tag, or sha. */
    ref: string;
    /** Parameter to specify a task to execute */
    task: string;
    payload: { [key: string]: unknown } | string;
    original_environment?: string;
    /** Name for the target deployment environment. */
    environment: string;
    description: string | null;
    creator: NullableSimpleUser;
    created_at: string;
    updated_at: string;
    statuses_url: string;
    repository_url: string;
    /** Specifies if the given environment is will no longer exist at some point in the future. Default: false. */
    transient_environment?: boolean;
    /** Specifies if the given environment is one that endUsers directly interact with. Default: false. */
    production_environment?: boolean;
    performed_via_github_app?: NullableIntegration;
};
/** Workflow Run Usage */
export type WorkflowRunUsage = {
    billable: {
        UBUNTU?: {
            total_ms: number;
            jobs: number;
            job_runs?: {
                job_id: number;
                duration_ms: number;
            }[];
        };
        MACOS?: {
            total_ms: number;
            jobs: number;
            job_runs?: {
                job_id: number;
                duration_ms: number;
            }[];
        };
        WINDOWS?: {
            total_ms: number;
            jobs: number;
            job_runs?: {
                job_id: number;
                duration_ms: number;
            }[];
        };
    };
    run_duration_ms?: number;
};
/** Set secrets for GitHub Actions. */
export type ActionsSecret = {
    /** The name of the secret. */
    name: string;
    created_at: string;
    updated_at: string;
};
/** A GitHub Actions workflow */
export type Workflow = {
    id: number;
    node_id: string;
    name: string;
    path: string;
    state:
    | "active"
    | "deleted"
    | "disabled_fork"
    | "disabled_inactivity"
    | "disabled_manually";
    created_at: string;
    updated_at: string;
    url: string;
    html_url: string;
    badge_url: string;
    deleted_at?: string;
};
/** Workflow Usage */
export type WorkflowUsage = {
    billable: {
        UBUNTU?: {
            total_ms?: number;
        };
        MACOS?: {
            total_ms?: number;
        };
        WINDOWS?: {
            total_ms?: number;
        };
    };
};
/** An autolink reference. */
export type Autolink = {
    id: number;
    /** The prefix of a key that is linkified. */
    key_prefix: string;
    /** A template for the target URL that is generated if a key was found. */
    url_template: string;
};
/** Protected Branch Admin Enforced */
export type ProtectedBranchAdminEnforced = {
    url: string;
    enabled: boolean;
};
/** Protected Branch Pull Request Review */
export type ProtectedBranchPullRequestReview = {
    url?: string;
    dismissal_restrictions?: {
        /** The list of users with review dismissal access. */
        users?: SimpleUser[];
        /** The list of teams with review dismissal access. */
        teams?: Team[];
        url?: string;
        users_url?: string;
        teams_url?: string;
    };
    dismiss_stale_reviews: boolean;
    require_code_owner_reviews: boolean;
    required_approving_review_count?: number;
};
/** Branch Restriction Policy */
export type BranchRestrictionPolicy = {
    url: string;
    users_url: string;
    teams_url: string;
    apps_url: string;
    users: {
        login?: string;
        id?: number;
        node_id?: string;
        avatar_url?: string;
        gravatar_id?: string;
        url?: string;
        html_url?: string;
        followers_url?: string;
        following_url?: string;
        gists_url?: string;
        starred_url?: string;
        subscriptions_url?: string;
        organizations_url?: string;
        repos_url?: string;
        events_url?: string;
        received_events_url?: string;
        type?: string;
        site_admin?: boolean;
    }[];
    teams: {
        id?: number;
        node_id?: string;
        url?: string;
        html_url?: string;
        name?: string;
        slug?: string;
        description?: string | null;
        privacy?: string;
        permission?: string;
        members_url?: string;
        repositories_url?: string;
        parent?: string | null;
    }[];
    apps: {
        id?: number;
        slug?: string;
        node_id?: string;
        owner?: {
            login?: string;
            id?: number;
            node_id?: string;
            url?: string;
            repos_url?: string;
            events_url?: string;
            hooks_url?: string;
            issues_url?: string;
            members_url?: string;
            public_members_url?: string;
            avatar_url?: string;
            description?: string;
            gravatar_id?: string;
            html_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            starred_url?: string;
            subscriptions_url?: string;
            organizations_url?: string;
            received_events_url?: string;
            type?: string;
            site_admin?: boolean;
        };
        name?: string;
        description?: string;
        external_url?: string;
        html_url?: string;
        created_at?: string;
        updated_at?: string;
        permissions?: {
            metadata?: string;
            contents?: string;
            issues?: string;
            single_file?: string;
        };
        events?: string[];
    }[];
};
/** Branch Protection */
export type BranchProtection = {
    url?: string;
    enabled?: boolean;
    required_status_checks?: {
        url?: string;
        enforcement_level?: string;
        contexts: string[];
        contexts_url?: string;
        strict?: boolean;
    };
    enforce_admins?: ProtectedBranchAdminEnforced;
    required_pull_request_reviews?: ProtectedBranchPullRequestReview;
    restrictions?: BranchRestrictionPolicy;
    required_linear_history?: {
        enabled?: boolean;
    };
    allow_force_pushes?: {
        enabled?: boolean;
    };
    allow_deletions?: {
        enabled?: boolean;
    };
    required_conversation_resolution?: {
        enabled?: boolean;
    };
    name?: string;
    protection_url?: string;
    required_signatures?: {
        url: string;
        enabled: boolean;
    };
};
/** Short Branch */
export type ShortBranch = {
    name: string;
    commit: {
        sha: string;
        url: string;
    };
    protected: boolean;
    protection?: BranchProtection;
    protection_url?: string;
};
/** Metaproperties for Git author/committer information. */
export type NullableGitUser = {
    name?: string;
    email?: string;
    date?: string;
} | null;
export type Verification = {
    verified: boolean;
    reason: string;
    payload: string | null;
    signature: string | null;
};
/** Commit */
export type Commit = {
    url: string;
    sha: string;
    node_id: string;
    html_url: string;
    comments_url: string;
    commit: {
        url: string;
        author: NullableGitUser;
        committer: NullableGitUser;
        message: string;
        comment_count: number;
        tree: {
            sha: string;
            url: string;
        };
        verification?: Verification;
    };
    author: NullableSimpleUser;
    committer: NullableSimpleUser;
    parents: {
        sha: string;
        url: string;
        html_url?: string;
    }[];
    stats?: {
        additions?: number;
        deletions?: number;
        total?: number;
    };
    files?: {
        filename?: string;
        additions?: number;
        deletions?: number;
        changes?: number;
        status?: string;
        raw_url?: string;
        blob_url?: string;
        patch?: string;
        sha?: string;
        contents_url?: string;
        previous_filename?: string;
    }[];
};
/** Branch With Protection */
export type BranchWithProtection = {
    name: string;
    commit: Commit;
    _links: {
        html: string;
        self: string;
    };
    protected: boolean;
    protection: BranchProtection;
    protection_url: string;
    pattern?: string;
    required_approving_review_count?: number;
};
/** Status Check Policy */
export type StatusCheckPolicy = {
    url: string;
    strict: boolean;
    contexts: string[];
    contexts_url: string;
};
/** Branch protections protect branches */
export type ProtectedBranch = {
    url: string;
    required_status_checks?: StatusCheckPolicy;
    required_pull_request_reviews?: {
        url: string;
        dismiss_stale_reviews?: boolean;
        require_code_owner_reviews?: boolean;
        required_approving_review_count?: number;
        dismissal_restrictions?: {
            url: string;
            users_url: string;
            teams_url: string;
            users: SimpleUser[];
            teams: Team[];
        };
    };
    required_signatures?: {
        url: string;
        enabled: boolean;
    };
    enforce_admins?: {
        url: string;
        enabled: boolean;
    };
    required_linear_history?: {
        enabled: boolean;
    };
    allow_force_pushes?: {
        enabled: boolean;
    };
    allow_deletions?: {
        enabled: boolean;
    };
    restrictions?: BranchRestrictionPolicy;
    required_conversation_resolution?: {
        enabled?: boolean;
    };
};
/** A deployment created as the result of an Actions check run from a workflow that references an environment */
export type DeploymentSimple = {
    url: string;
    /** Unique identifier of the deployment */
    id: number;
    node_id: string;
    /** Parameter to specify a task to execute */
    task: string;
    original_environment?: string;
    /** Name for the target deployment environment. */
    environment: string;
    description: string | null;
    created_at: string;
    updated_at: string;
    statuses_url: string;
    repository_url: string;
    /** Specifies if the given environment is will no longer exist at some point in the future. Default: false. */
    transient_environment?: boolean;
    /** Specifies if the given environment is one that endUsers directly interact with. Default: false. */
    production_environment?: boolean;
    performed_via_github_app?: NullableIntegration;
};
/** A check performed on the code of a given code change */
export type CheckRun = {
    /** The id of the check. */
    id: number;
    /** The SHA of the commit that is being checked. */
    head_sha: string;
    node_id: string;
    external_id: string | null;
    url: string;
    html_url: string | null;
    details_url: string | null;
    /** The phase of the lifecycle that the check is currently in. */
    status: "queued" | "in_progress" | "completed";
    conclusion:
    | (
        | "success"
        | "failure"
        | "neutral"
        | "cancelled"
        | "skipped"
        | "timed_out"
        | "action_required"
    )
    | null;
    started_at: string | null;
    completed_at: string | null;
    output: {
        title: string | null;
        summary: string | null;
        text: string | null;
        annotations_count: number;
        annotations_url: string;
    };
    /** The name of the check. */
    name: string;
    check_suite: {
        id: number;
    } | null;
    app: NullableIntegration;
    pull_requests: PullRequestMinimal[];
    deployment?: DeploymentSimple;
};
/** Check Annotation */
export type CheckAnnotation = {
    path: string;
    start_line: number;
    end_line: number;
    start_column: number | null;
    end_column: number | null;
    annotation_level: string | null;
    title: string | null;
    message: string | null;
    raw_details: string | null;
    blob_href: string;
};
/** Simple Commit */
export type SimpleCommit = {
    id: string;
    tree_id: string;
    message: string;
    timestamp: string;
    author: {
        name: string;
        email: string;
    } | null;
    committer: {
        name: string;
        email: string;
    } | null;
};
/** A suite of checks performed on the code of a given code change */
export type CheckSuite = {
    id: number;
    node_id: string;
    head_branch: string | null;
    /** The SHA of the head commit that is being checked. */
    head_sha: string;
    status: ("queued" | "in_progress" | "completed") | null;
    conclusion:
    | (
        | "success"
        | "failure"
        | "neutral"
        | "cancelled"
        | "skipped"
        | "timed_out"
        | "action_required"
    )
    | null;
    url: string | null;
    before: string | null;
    after: string | null;
    pull_requests: PullRequestMinimal[] | null;
    app: NullableIntegration;
    repository: MinimalRepository;
    created_at: string | null;
    updated_at: string | null;
    head_commit: SimpleCommit;
    latest_check_runs_count: number;
    check_runs_url: string;
};
/** Check suite configuration preferences for a repository. */
export type CheckSuitePreference = {
    preferences: {
        auto_trigger_checks?: {
            app_id: number;
            setting: boolean;
        }[];
    };
    repository: MinimalRepository;
};
/** The name of the tool used to generate the code scanning analysis. */
export type CodeScanningAnalysisToolName = string;
/** The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data. */
export type CodeScanningAnalysisToolGuid = string | null;
/**
 * The full Git reference, formatted as `refs/heads/<branch name>`,
 * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
 */
export type CodeScanningRef = string;
/** State of a code scanning alert. */
export type CodeScanningAlertState = "open" | "closed" | "dismissed" | "fixed";
/** The REST API URL for fetching the list of instances for an alert. */
export type AlertInstancesUrl = string;
/** The time that the alert was dismissed in ISO 8601 format: `YYYYMMDDTHH:MM:SSZ`. */
export type CodeScanningAlertDismissedAt = string | null;
/** **Required when the state is dismissed.** The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`. */
export type CodeScanningAlertDismissedReason =
    | ("false positive" | "won't fix" | "used in tests")
    | null;
export type CodeScanningAlertRuleSummary = {
    /** A unique identifier for the rule used to detect the alert. */
    id?: string | null;
    /** The name of the rule used to detect the alert. */
    name?: string;
    /** The severity of the alert. */
    severity?: ("none" | "note" | "warning" | "error") | null;
    /** A short description of the rule used to detect the alert. */
    description?: string;
};
/** The version of the tool used to generate the code scanning analysis. */
export type CodeScanningAnalysisToolVersion = string | null;
export type CodeScanningAnalysisTool = {
    name?: CodeScanningAnalysisToolName;
    version?: CodeScanningAnalysisToolVersion;
    guid?: CodeScanningAnalysisToolGuid;
};
/** Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name. */
export type CodeScanningAnalysisAnalysisKey = string;
/** Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed. */
export type CodeScanningAlertEnvironment = string;
/** Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code. */
export type CodeScanningAnalysisCategory = string;
/** Describe a region within a file for the alert. */
export type CodeScanningAlertLocation = {
    path?: string;
    start_line?: number;
    end_line?: number;
    start_column?: number;
    end_column?: number;
};
/** A classification of the file. For example to identify it as generated. */
export type CodeScanningAlertClassification =
    | ("source" | "generated" | "test" | "library")
    | null;
export type CodeScanningAlertInstance = {
    ref?: CodeScanningRef;
    analysis_key?: CodeScanningAnalysisAnalysisKey;
    environment?: CodeScanningAlertEnvironment;
    category?: CodeScanningAnalysisCategory;
    state?: CodeScanningAlertState;
    commit_sha?: string;
    message?: {
        text?: string;
    };
    location?: CodeScanningAlertLocation;
    html_url?: string;
    /**
     * Classifications that have been applied to the file that triggered the alert.
     * For example identifying it as documentation, or a generated file.
     */
    classifications?: CodeScanningAlertClassification[];
};
export type CodeScanningAlertItems = {
    number: AlertNumber;
    created_at: AlertCreatedAt;
    url: AlertUrl;
    html_url: AlertHtmlUrl;
    instances_url: AlertInstancesUrl;
    state: CodeScanningAlertState;
    dismissed_by: NullableSimpleUser;
    dismissed_at: CodeScanningAlertDismissedAt;
    dismissed_reason: CodeScanningAlertDismissedReason;
    rule: CodeScanningAlertRuleSummary;
    tool: CodeScanningAnalysisTool;
    most_recent_instance: CodeScanningAlertInstance;
};
export type CodeScanningAlertRule = {
    /** A unique identifier for the rule used to detect the alert. */
    id?: string | null;
    /** The name of the rule used to detect the alert. */
    name?: string;
    /** The severity of the alert. */
    severity?: ("none" | "note" | "warning" | "error") | null;
    /** The security severity of the alert. */
    security_severity_level?: ("low" | "medium" | "high" | "critical") | null;
    /** A short description of the rule used to detect the alert. */
    description?: string;
    /** description of the rule used to detect the alert. */
    full_description?: string;
    /** A set of tags applicable for the rule. */
    tags?: string[] | null;
    /** Detailed documentation for the rule as GitHub Flavored Markdown. */
    help?: string | null;
};
export type CodeScanningAlert = {
    number: AlertNumber;
    created_at: AlertCreatedAt;
    url: AlertUrl;
    html_url: AlertHtmlUrl;
    instances_url: AlertInstancesUrl;
    state: CodeScanningAlertState;
    dismissed_by: NullableSimpleUser;
    dismissed_at: CodeScanningAlertDismissedAt;
    dismissed_reason: CodeScanningAlertDismissedReason;
    rule: CodeScanningAlertRule;
    tool: CodeScanningAnalysisTool;
    most_recent_instance: CodeScanningAlertInstance;
};
/** Sets the state of the code scanning alert. Can be one of `open` or `dismissed`. You must provide `dismissed_reason` when you set the state to `dismissed`. */
export type CodeScanningAlertSetState = "open" | "dismissed";
/** An identifier for the upload. */
export type CodeScanningAnalysisSarifId = string;
/** The SHA of the commit to which the analysis you are uploading relates. */
export type CodeScanningAnalysisCommitSha = string;
/** Identifies the variable values associated with the environment in which this analysis was performed. */
export type CodeScanningAnalysisEnvironment = string;
/** The time that the analysis was created in ISO 8601 format: `YYYYMMDDTHH:MM:SSZ`. */
export type CodeScanningAnalysisCreatedAt = string;
/** The REST API URL of the analysis resource. */
export type CodeScanningAnalysisUrl = string;
export type CodeScanningAnalysis = {
    ref: CodeScanningRef;
    commit_sha: CodeScanningAnalysisCommitSha;
    analysis_key: CodeScanningAnalysisAnalysisKey;
    environment: CodeScanningAnalysisEnvironment;
    category?: CodeScanningAnalysisCategory;
    error: string;
    created_at: CodeScanningAnalysisCreatedAt;
    /** The total number of results in the analysis. */
    results_count: number;
    /** The total number of rules used in the analysis. */
    rules_count: number;
    /** Unique identifier for this analysis. */
    id: number;
    url: CodeScanningAnalysisUrl;
    sarif_id: CodeScanningAnalysisSarifId;
    tool: CodeScanningAnalysisTool;
    deletable: boolean;
    /** Warning generated when processing the analysis */
    warning: string;
};
/** Successful deletion of a code scanning analysis */
export type CodeScanningAnalysisDeletion = {
    /** Next deletable analysis in chain, without last analysis deletion confirmation */
    next_analysis_url: string | null;
    /** Next deletable analysis in chain, with last analysis deletion confirmation */
    confirm_delete_url: string | null;
};
/** A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see "[SARIF support for code scanning](https://docs.github.com/codeSecurity/secureCoding/sarifSupportForCodeScanning)." */
export type CodeScanningAnalysisSarifFile = string;
export type CodeScanningSarifsReceipt = {
    id?: CodeScanningAnalysisSarifId;
    /** The REST API URL for checking the status of the upload. */
    url?: string;
};
export type CodeScanningSarifsStatus = {
    /** `pending` files have not yet been processed, while `complete` means all results in the SARIF have been stored. */
    processing_status?: "pending" | "complete";
    /** The REST API URL for getting the analyses associated with the upload. */
    analyses_url?: string | null;
};
/** Collaborator */
export type Collaborator = {
    login: string;
    id: number;
    email?: string | null;
    name?: string | null;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    permissions?: {
        pull: boolean;
        triage?: boolean;
        push: boolean;
        maintain?: boolean;
        admin: boolean;
    };
};
/** Repository invitations let you manage who you collaborate with. */
export type RepositoryInvitation = {
    /** Unique identifier of the repository invitation. */
    id: number;
    repository: MinimalRepository;
    invitee: NullableSimpleUser;
    inviter: NullableSimpleUser;
    /** The permission associated with the invitation. */
    permissions: "read" | "write" | "admin" | "triage" | "maintain";
    created_at: string;
    /** Whether or not the invitation has expired */
    expired?: boolean;
    /** URL for the repository invitation */
    url: string;
    html_url: string;
    node_id: string;
};
/** Commit Comment */
export type CommitComment = {
    html_url: string;
    url: string;
    id: number;
    node_id: string;
    body: string;
    path: string | null;
    position: number | null;
    line: number | null;
    commit_id: string;
    user: NullableSimpleUser;
    created_at: string;
    updated_at: string;
    author_association: Author_association;
    reactions?: ReactionRollup;
};
/** Branch Short */
export type BranchShort = {
    name: string;
    commit: {
        sha: string;
        url: string;
    };
    protected: boolean;
};
/** Hypermedia Link */
export type Link = {
    href: string;
};
/** The status of auto merging a pull request. */
export type Auto_merge = {
    enabled_by: SimpleUser;
    /** The merge method to use. */
    merge_method: "merge" | "squash" | "rebase";
    /** Title for the merge commit message. */
    commit_title: string;
    /** Commit message for the merge commit. */
    commit_message: string;
} | null;
/** Pull Request Simple */
export type PullRequestSimple = {
    url: string;
    id: number;
    node_id: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    number: number;
    state: string;
    locked: boolean;
    title: string;
    user: NullableSimpleUser;
    body: string | null;
    labels: {
        id?: number;
        node_id?: string;
        url?: string;
        name?: string;
        description?: string;
        color?: string;
        default?: boolean;
    }[];
    milestone: NullableMilestone;
    active_lock_reason?: string | null;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    merged_at: string | null;
    merge_commit_sha: string | null;
    assignee: NullableSimpleUser;
    assignees?: SimpleUser[] | null;
    requested_reviewers?: SimpleUser[] | null;
    requested_teams?: Team[] | null;
    head: {
        label: string;
        ref: string;
        repo: Repository;
        sha: string;
        user: NullableSimpleUser;
    };
    base: {
        label: string;
        ref: string;
        repo: Repository;
        sha: string;
        user: NullableSimpleUser;
    };
    _links: {
        comments: Link;
        commits: Link;
        statuses: Link;
        html: Link;
        issue: Link;
        review_comments: Link;
        review_comment: Link;
        self: Link;
    };
    author_association: Author_association;
    auto_merge: Auto_merge;
    /** Indicates whether or not the pull request is a draft. */
    draft?: boolean;
};
export type SimpleCommitStatus = {
    description: string | null;
    id: number;
    node_id: string;
    state: string;
    context: string;
    target_url: string;
    required?: boolean | null;
    avatar_url: string | null;
    url: string;
    created_at: string;
    updated_at: string;
};
/** Combined Commit Status */
export type CombinedCommitStatus = {
    state: string;
    statuses: SimpleCommitStatus[];
    sha: string;
    total_count: number;
    repository: MinimalRepository;
    commit_url: string;
    url: string;
};
/** The status of a commit. */
export type Status = {
    url: string;
    avatar_url: string | null;
    id: number;
    node_id: string;
    state: string;
    description: string;
    target_url: string;
    context: string;
    created_at: string;
    updated_at: string;
    creator: NullableSimpleUser;
};
/** Code of Conduct Simple */
export type NullableCodeOfConductSimple = {
    url: string;
    key: string;
    name: string;
    html_url: string | null;
} | null;
export type NullableCommunityHealthFile = {
    url: string;
    html_url: string;
} | null;
/** Community Profile */
export type CommunityProfile = {
    health_percentage: number;
    description: string | null;
    documentation: string | null;
    files: {
        code_of_conduct: NullableCodeOfConductSimple;
        code_of_conduct_file: NullableCommunityHealthFile;
        license: NullableLicenseSimple;
        contributing: NullableCommunityHealthFile;
        readme: NullableCommunityHealthFile;
        issue_template: NullableCommunityHealthFile;
        pull_request_template: NullableCommunityHealthFile;
    };
    updated_at: string | null;
    content_reports_enabled?: boolean;
};
/** Diff Entry */
export type DiffEntry = {
    sha: string;
    filename: string;
    status:
    | "added"
    | "removed"
    | "modified"
    | "renamed"
    | "copied"
    | "changed"
    | "unchanged";
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
    patch?: string;
    previous_filename?: string;
};
/** Commit Comparison */
export type CommitComparison = {
    url: string;
    html_url: string;
    permalink_url: string;
    diff_url: string;
    patch_url: string;
    base_commit: Commit;
    merge_base_commit: Commit;
    status: "diverged" | "ahead" | "behind" | "identical";
    ahead_by: number;
    behind_by: number;
    total_commits: number;
    commits: Commit[];
    files?: DiffEntry[];
};
/** Content Reference attachments allow you to provide context around URLs posted in comments */
export type ContentReferenceAttachment = {
    /** The ID of the attachment */
    id: number;
    /** The title of the attachment */
    title: string;
    /** The body of the attachment */
    body: string;
    /** The node_id of the content attachment */
    node_id?: string;
};
/** Content Tree */
export type ContentTree = {
    type: string;
    size: number;
    name: string;
    path: string;
    sha: string;
    url: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
    entries?: {
        type: string;
        size: number;
        name: string;
        path: string;
        content?: string;
        sha: string;
        url: string;
        git_url: string | null;
        html_url: string | null;
        download_url: string | null;
        _links: {
            git: string | null;
            html: string | null;
            self: string;
        };
    }[];
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
} & {
    content: unknown;
    encoding: unknown;
};
/** A list of directory items */
export type ContentDirectory = {
    type: string;
    size: number;
    name: string;
    path: string;
    content?: string;
    sha: string;
    url: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
}[];
/** Content File */
export type ContentFile = {
    type: string;
    encoding: string;
    size: number;
    name: string;
    path: string;
    content: string;
    sha: string;
    url: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
    target?: string;
    submodule_git_url?: string;
};
/** An object describing a symlink */
export type ContentSymlink = {
    type: string;
    target: string;
    size: number;
    name: string;
    path: string;
    sha: string;
    url: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
};
/** An object describing a symlink */
export type ContentSubmodule = {
    type: string;
    submodule_git_url: string;
    size: number;
    name: string;
    path: string;
    sha: string;
    url: string;
    git_url: string | null;
    html_url: string | null;
    download_url: string | null;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
};
/** File Commit */
export type FileCommit = {
    content: {
        name?: string;
        path?: string;
        sha?: string;
        size?: number;
        url?: string;
        html_url?: string;
        git_url?: string;
        download_url?: string;
        type?: string;
        _links?: {
            self?: string;
            git?: string;
            html?: string;
        };
    } | null;
    commit: {
        sha?: string;
        node_id?: string;
        url?: string;
        html_url?: string;
        author?: {
            date?: string;
            name?: string;
            email?: string;
        };
        committer?: {
            date?: string;
            name?: string;
            email?: string;
        };
        message?: string;
        tree?: {
            url?: string;
            sha?: string;
        };
        parents?: {
            url?: string;
            html_url?: string;
            sha?: string;
        }[];
        verification?: {
            verified?: boolean;
            reason?: string;
            signature?: string | null;
            payload?: string | null;
        };
    };
};
/** Contributor */
export type Contributor = {
    login?: string;
    id?: number;
    node_id?: string;
    avatar_url?: string;
    gravatar_id?: string | null;
    url?: string;
    html_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url?: string;
    events_url?: string;
    received_events_url?: string;
    type: string;
    site_admin?: boolean;
    contributions: number;
    email?: string;
    name?: string;
};
/** The status of a deployment. */
export type DeploymentStatus = {
    url: string;
    id: number;
    node_id: string;
    /** The state of the status. */
    state:
    | "error"
    | "failure"
    | "inactive"
    | "pending"
    | "success"
    | "queued"
    | "in_progress";
    creator: NullableSimpleUser;
    /** A short description of the status. */
    description: string;
    /** The environment of the deployment that the status is for. */
    environment?: string;
    /** Deprecated: the URL to associate with this status. */
    target_url: string;
    created_at: string;
    updated_at: string;
    deployment_url: string;
    repository_url: string;
    /** The URL for accessing your environment. */
    environment_url?: string;
    /** The URL to associate with this status. */
    log_url?: string;
    performed_via_github_app?: NullableIntegration;
};
/** The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days). */
export type WaitTimer = number;
/** The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`. */
export type DeploymentBranchPolicy = {
    /** Whether only branches with branch protection rules can deploy to this environment. If `protected_branches` is `true`, `custom_branch_policies` must be `false`; if `protected_branches` is `false`, `custom_branch_policies` must be `true`. */
    protected_branches: boolean;
    /** Whether only branches that match the specified name patterns can deploy to this environment.  If `custom_branch_policies` is `true`, `protected_branches` must be `false`; if `custom_branch_policies` is `false`, `protected_branches` must be `true`. */
    custom_branch_policies: boolean;
} | null;
/** Details of a deployment environment */
export type Environment = {
    /** The id of the environment. */
    id: number;
    node_id: string;
    /** The name of the environment. */
    name: string;
    url: string;
    html_url: string;
    /** The time that the environment was created, in ISO 8601 format. */
    created_at: string;
    /** The time that the environment was last updated, in ISO 8601 format. */
    updated_at: string;
    protection_rules?: (Partial<{
        id: number;
        node_id: string;
        type: string;
        wait_timer?: WaitTimer;
    }> &
        Partial<{
            id: number;
            node_id: string;
            type: string;
            /** The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed. */
            reviewers?: {
                type?: DeploymentReviewerType;
                reviewer?: Partial<SimpleUser> &
                Partial<Team>;
            }[];
        }> &
        Partial<{
            id: number;
            node_id: string;
            type: string;
        }>)[];
    deployment_branch_policy?: DeploymentBranchPolicy;
};
/** Short Blob */
export type ShortBlob = {
    url: string;
    sha: string;
};
/** Blob */
export type Blob = {
    content: string;
    encoding: string;
    url: string;
    sha: string;
    size: number | null;
    node_id: string;
    highlighted_content?: string;
};
/** LowLevel Git commit operations within a repository */
export type GitCommit = {
    /** SHA for the commit */
    sha: string;
    node_id: string;
    url: string;
    /** Identifying information for the gitUser */
    author: {
        /** Timestamp of the commit */
        date: string;
        /** Git email address of the user */
        email: string;
        /** Name of the git user */
        name: string;
    };
    /** Identifying information for the gitUser */
    committer: {
        /** Timestamp of the commit */
        date: string;
        /** Git email address of the user */
        email: string;
        /** Name of the git user */
        name: string;
    };
    /** Message describing the purpose of the commit */
    message: string;
    tree: {
        /** SHA for the commit */
        sha: string;
        url: string;
    };
    parents: {
        /** SHA for the commit */
        sha: string;
        url: string;
        html_url: string;
    }[];
    verification: {
        verified: boolean;
        reason: string;
        signature: string | null;
        payload: string | null;
    };
    html_url: string;
};
/** Git references within a repository */
export type GitRef = {
    ref: string;
    node_id: string;
    url: string;
    object: {
        type: string;
        /** SHA for the reference */
        sha: string;
        url: string;
    };
};
/** Metadata for a Git tag */
export type GitTag = {
    node_id: string;
    /** Name of the tag */
    tag: string;
    sha: string;
    /** URL for the tag */
    url: string;
    /** Message describing the purpose of the tag */
    message: string;
    tagger: {
        date: string;
        email: string;
        name: string;
    };
    object: {
        sha: string;
        type: string;
        url: string;
    };
    verification?: Verification;
};
/** The hierarchy between files in a Git repository. */
export type GitTree = {
    sha: string;
    url: string;
    truncated: boolean;
    /** Objects specifying a tree structure */
    tree: {
        path?: string;
        mode?: string;
        type?: string;
        sha?: string;
        size?: number;
        url?: string;
    }[];
};
export type HookResponse = {
    code: number | null;
    status: string | null;
    message: string | null;
};
/** Webhooks for repositories. */
export type Hook = {
    type: string;
    /** Unique identifier of the webhook. */
    id: number;
    /** The name of a valid service, use 'web' for a webhook. */
    name: string;
    /** Determines whether the hook is actually triggered on pushes. */
    active: boolean;
    /** Determines what events the hook is triggered for. Default: ['push']. */
    events: string[];
    config: {
        email?: string;
        password?: string;
        room?: string;
        subdomain?: string;
        url?: WebhookConfigUrl;
        insecure_ssl?: WebhookConfigInsecureSsl;
        content_type?: WebhookConfigContentType;
        digest?: string;
        secret?: WebhookConfigSecret;
        token?: string;
    };
    updated_at: string;
    created_at: string;
    url: string;
    test_url: string;
    ping_url: string;
    deliveries_url?: string;
    last_response: HookResponse;
};
/** A repository import from an external source. */
export type Import = {
    vcs: string | null;
    use_lfs?: boolean;
    /** The URL of the originating repository. */
    vcs_url: string;
    svc_root?: string;
    tfvc_project?: string;
    status:
    | "auth"
    | "error"
    | "none"
    | "detecting"
    | "choose"
    | "auth_failed"
    | "importing"
    | "mapping"
    | "waiting_to_push"
    | "pushing"
    | "complete"
    | "setup"
    | "unknown"
    | "detection_found_multiple"
    | "detection_found_nothing"
    | "detection_needs_auth";
    status_text?: string | null;
    failed_step?: string | null;
    error_message?: string | null;
    import_percent?: number | null;
    commit_count?: number | null;
    push_percent?: number | null;
    has_large_files?: boolean;
    large_files_size?: number;
    large_files_count?: number;
    project_choices?: {
        vcs?: string;
        tfvc_project?: string;
        human_name?: string;
    }[];
    message?: string;
    authors_count?: number | null;
    url: string;
    html_url: string;
    authors_url: string;
    repository_url: string;
    svn_root?: string;
};
/** Porter Author */
export type PorterAuthor = {
    id: number;
    remote_id: string;
    remote_name: string;
    email: string;
    name: string;
    url: string;
    import_url: string;
};
/** Porter Large File */
export type PorterLargeFile = {
    ref_name: string;
    path: string;
    oid: string;
    size: number;
};
/** Issue Event Label */
export type IssueEventLabel = {
    name: string | null;
    color: string | null;
};
export type IssueEventDismissedReview = {
    state: string;
    review_id: number;
    dismissal_message: string | null;
    dismissal_commit_id?: string | null;
};
/** Issue Event Milestone */
export type IssueEventMilestone = {
    title: string;
};
/** Issue Event Project Card */
export type IssueEventProjectCard = {
    url: string;
    id: number;
    project_url: string;
    project_id: number;
    column_name: string;
    previous_column_name?: string;
};
/** Issue Event Rename */
export type IssueEventRename = {
    from: string;
    to: string;
};
/** Issue Event */
export type IssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: NullableSimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    issue?: Issue;
    label?: IssueEventLabel;
    assignee?: NullableSimpleUser;
    assigner?: NullableSimpleUser;
    review_requester?: NullableSimpleUser;
    requested_reviewer?: NullableSimpleUser;
    requested_team?: Team;
    dismissed_review?: IssueEventDismissedReview;
    milestone?: IssueEventMilestone;
    project_card?: IssueEventProjectCard;
    rename?: IssueEventRename;
    author_association?: Author_association;
    lock_reason?: string | null;
    performed_via_github_app?: NullableIntegration;
};
/** Labeled Issue Event */
export type LabeledIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    label: {
        name: string;
        color: string;
    };
};
/** Unlabeled Issue Event */
export type UnlabeledIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    label: {
        name: string;
        color: string;
    };
};
/** Assigned Issue Event */
export type AssignedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: Integration;
    assignee: SimpleUser;
    assigner: SimpleUser;
};
/** Unassigned Issue Event */
export type UnassignedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    assignee: SimpleUser;
    assigner: SimpleUser;
};
/** Milestoned Issue Event */
export type MilestonedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    milestone: {
        title: string;
    };
};
/** Demilestoned Issue Event */
export type DemilestonedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    milestone: {
        title: string;
    };
};
/** Renamed Issue Event */
export type RenamedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    rename: {
        from: string;
        to: string;
    };
};
/** Review Requested Issue Event */
export type ReviewRequestedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    review_requester: SimpleUser;
    requested_team?: Team;
    requested_reviewer?: SimpleUser;
};
/** Review Request Removed Issue Event */
export type ReviewRequestRemovedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    review_requester: SimpleUser;
    requested_team?: Team;
    requested_reviewer?: SimpleUser;
};
/** Review Dismissed Issue Event */
export type ReviewDismissedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    dismissed_review: {
        state: string;
        review_id: number;
        dismissal_message: string | null;
        dismissal_commit_id?: string;
    };
};
/** Locked Issue Event */
export type LockedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    lock_reason: string | null;
};
/** Added to Project Issue Event */
export type AddedToProjectIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    project_card?: {
        id: number;
        url: string;
        project_id: number;
        project_url: string;
        column_name: string;
        previous_column_name?: string;
    };
};
/** Moved Column in Project Issue Event */
export type MovedColumnInProjectIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    project_card?: {
        id: number;
        url: string;
        project_id: number;
        project_url: string;
        column_name: string;
        previous_column_name?: string;
    };
};
/** Removed from Project Issue Event */
export type RemovedFromProjectIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    project_card?: {
        id: number;
        url: string;
        project_id: number;
        project_url: string;
        column_name: string;
        previous_column_name?: string;
    };
};
/** Converted Note to Issue Issue Event */
export type ConvertedNoteToIssueIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: Integration;
    project_card?: {
        id: number;
        url: string;
        project_id: number;
        project_url: string;
        column_name: string;
        previous_column_name?: string;
    };
};
/** Issue Event for Issue */
export type IssueEventForIssue = Partial<
    LabeledIssueEvent
> &
    Partial<UnlabeledIssueEvent> &
    Partial<AssignedIssueEvent> &
    Partial<UnassignedIssueEvent> &
    Partial<MilestonedIssueEvent> &
    Partial<DemilestonedIssueEvent> &
    Partial<RenamedIssueEvent> &
    Partial<ReviewRequestedIssueEvent> &
    Partial<ReviewRequestRemovedIssueEvent> &
    Partial<ReviewDismissedIssueEvent> &
    Partial<LockedIssueEvent> &
    Partial<AddedToProjectIssueEvent> &
    Partial<MovedColumnInProjectIssueEvent> &
    Partial<RemovedFromProjectIssueEvent> &
    Partial<ConvertedNoteToIssueIssueEvent>;
/** ColorCoded labels help you categorize and filter your issues (just like labels in Gmail). */
export type Label = {
    id: number;
    node_id: string;
    /** URL for the label */
    url: string;
    /** The name of the label. */
    name: string;
    description: string | null;
    /** 6Character hex code, without the leading #, identifying the color */
    color: string;
    default: boolean;
};
/** Timeline Comment Event */
export type TimelineCommentEvent = {
    event: string;
    actor: SimpleUser;
    /** Unique identifier of the issue comment */
    id: number;
    node_id: string;
    /** URL for the issue comment */
    url: string;
    /** Contents of the issue comment */
    body?: string;
    body_text?: string;
    body_html?: string;
    html_url: string;
    user: SimpleUser;
    created_at: string;
    updated_at: string;
    issue_url: string;
    author_association: Author_association;
    performed_via_github_app?: NullableIntegration;
    reactions?: ReactionRollup;
};
/** Timeline Cross Referenced Event */
export type TimelineCrossReferencedEvent = {
    event: string;
    actor?: SimpleUser;
    created_at: string;
    updated_at: string;
    source: {
        type?: string;
        issue?: Issue;
    };
};
/** Timeline Committed Event */
export type TimelineCommittedEvent = {
    event?: string;
    /** SHA for the commit */
    sha: string;
    node_id: string;
    url: string;
    /** Identifying information for the gitUser */
    author: {
        /** Timestamp of the commit */
        date: string;
        /** Git email address of the user */
        email: string;
        /** Name of the git user */
        name: string;
    };
    /** Identifying information for the gitUser */
    committer: {
        /** Timestamp of the commit */
        date: string;
        /** Git email address of the user */
        email: string;
        /** Name of the git user */
        name: string;
    };
    /** Message describing the purpose of the commit */
    message: string;
    tree: {
        /** SHA for the commit */
        sha: string;
        url: string;
    };
    parents: {
        /** SHA for the commit */
        sha: string;
        url: string;
        html_url: string;
    }[];
    verification: {
        verified: boolean;
        reason: string;
        signature: string | null;
        payload: string | null;
    };
    html_url: string;
};
/** Timeline Reviewed Event */
export type TimelineReviewedEvent = {
    event: string;
    /** Unique identifier of the review */
    id: number;
    node_id: string;
    user: SimpleUser;
    /** The text of the review. */
    body: string | null;
    state: string;
    html_url: string;
    pull_request_url: string;
    _links: {
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
    };
    submitted_at?: string;
    /** A commit SHA for the review. */
    commit_id: string;
    body_html?: string;
    body_text?: string;
    author_association: Author_association;
};
/** Pull Request Review Comments are comments on a portion of the Pull Request's diff. */
export type PullRequestReviewComment = {
    /** URL for the pull request review comment */
    url: string;
    /** The ID of the pull request review to which the comment belongs. */
    pull_request_review_id: number | null;
    /** The ID of the pull request review comment. */
    id: number;
    /** The node ID of the pull request review comment. */
    node_id: string;
    /** The diff of the line that the comment refers to. */
    diff_hunk: string;
    /** The relative path of the file to which the comment applies. */
    path: string;
    /** The line index in the diff to which the comment applies. */
    position: number;
    /** The index of the original line in the diff to which the comment applies. */
    original_position: number;
    /** The SHA of the commit to which the comment applies. */
    commit_id: string;
    /** The SHA of the original commit to which the comment applies. */
    original_commit_id: string;
    /** The comment ID to reply to. */
    in_reply_to_id?: number;
    user: SimpleUser;
    /** The text of the comment. */
    body: string;
    created_at: string;
    updated_at: string;
    /** HTML URL for the pull request review comment. */
    html_url: string;
    /** URL for the pull request that the review comment belongs to. */
    pull_request_url: string;
    author_association: Author_association;
    _links: {
        self: {
            href: string;
        };
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
    };
    /** The first line of the range for a multiLine comment. */
    start_line?: number | null;
    /** The first line of the range for a multiLine comment. */
    original_start_line?: number | null;
    /** The side of the first line of the range for a multiLine comment. */
    start_side?: ("LEFT" | "RIGHT") | null;
    /** The line of the blob to which the comment applies. The last line of the range for a multiLine comment */
    line?: number;
    /** The line of the blob to which the comment applies. The last line of the range for a multiLine comment */
    original_line?: number;
    /** The side of the diff to which the comment applies. The side of the last line of the range for a multiLine comment */
    side?: "LEFT" | "RIGHT";
    reactions?: ReactionRollup;
    body_html?: string;
    body_text?: string;
};
/** Timeline Line Commented Event */
export type TimelineLineCommentedEvent = {
    event?: string;
    node_id?: string;
    comments?: PullRequestReviewComment[];
};
/** Timeline Commit Commented Event */
export type TimelineCommitCommentedEvent = {
    event?: string;
    node_id?: string;
    commit_id?: string;
    comments?: CommitComment[];
};
/** Timeline Assigned Issue Event */
export type TimelineAssignedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    assignee: SimpleUser;
};
/** Timeline Unassigned Issue Event */
export type TimelineUnassignedIssueEvent = {
    id: number;
    node_id: string;
    url: string;
    actor: SimpleUser;
    event: string;
    commit_id: string | null;
    commit_url: string | null;
    created_at: string;
    performed_via_github_app: NullableIntegration;
    assignee: SimpleUser;
};
/** Timeline Event */
export type TimelineIssueEvents = Partial<
    LabeledIssueEvent
> &
    Partial<UnlabeledIssueEvent> &
    Partial<MilestonedIssueEvent> &
    Partial<DemilestonedIssueEvent> &
    Partial<RenamedIssueEvent> &
    Partial<ReviewRequestedIssueEvent> &
    Partial<ReviewRequestRemovedIssueEvent> &
    Partial<ReviewDismissedIssueEvent> &
    Partial<LockedIssueEvent> &
    Partial<AddedToProjectIssueEvent> &
    Partial<MovedColumnInProjectIssueEvent> &
    Partial<RemovedFromProjectIssueEvent> &
    Partial<ConvertedNoteToIssueIssueEvent> &
    Partial<TimelineCommentEvent> &
    Partial<TimelineCrossReferencedEvent> &
    Partial<TimelineCommittedEvent> &
    Partial<TimelineReviewedEvent> &
    Partial<TimelineLineCommentedEvent> &
    Partial<TimelineCommitCommentedEvent> &
    Partial<TimelineAssignedIssueEvent> &
    Partial<TimelineUnassignedIssueEvent>;
/** An SSH key granting access to a single repository. */
export type DeployKey = {
    id: number;
    key: string;
    url: string;
    title: string;
    verified: boolean;
    created_at: string;
    read_only: boolean;
};
/** Language */
export type Language = { [key: string]: number };
/** License Content */
export type LicenseContent = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string | null;
    git_url: string | null;
    download_url: string | null;
    type: string;
    content: string;
    encoding: string;
    _links: {
        git: string | null;
        html: string | null;
        self: string;
    };
    license: NullableLicenseSimple;
};
/** Results of a successful merge upstream request */
export type MergedUpstream = {
    message?: string;
    merge_type?: "merge" | "fastForward" | "none";
    base_branch?: string;
};
/** A collection of related issues and pull requests. */
export type Milestone = {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    node_id: string;
    /** The number of the milestone. */
    number: number;
    /** The state of the milestone. */
    state: "open" | "closed";
    /** The title of the milestone. */
    title: string;
    description: string | null;
    creator: NullableSimpleUser;
    open_issues: number;
    closed_issues: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    due_on: string | null;
};
export type PagesSourceHash = {
    branch: string;
    path: string;
};
export type PagesHttpsCertificate = {
    state:
    | "new"
    | "authorization_created"
    | "authorization_pending"
    | "authorized"
    | "authorization_revoked"
    | "issued"
    | "uploaded"
    | "approved"
    | "errored"
    | "bad_authz"
    | "destroy_pending"
    | "dns_changed";
    description: string;
    /** Array of the domain set and its alternate name (if it is configured) */
    domains: unknown[];
    expires_at?: string;
};
/** The configuration for GitHub Pages for a repository. */
export type Page = {
    /** The API address for accessing this Page resource. */
    url: string;
    /** The status of the most recent build of the Page. */
    status: ("built" | "building" | "errored") | null;
    /** The Pages site's custom domain */
    cname: string | null;
    /** The state if the domain is protected */
    protected_domain_state?: ("pending" | "verified" | "unverified") | null;
    /** The timestamp when a pending domain becomes unverified. */
    pending_domain_unverified_at?: string | null;
    /** Whether the Page has a custom 404 page. */
    custom_404: boolean;
    /** The web address the Page can be accessed from. */
    html_url?: string;
    source?: PagesSourceHash;
    /** Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. */
    public: boolean;
    https_certificate?: PagesHttpsCertificate;
    /** Whether https is enabled on the domain */
    https_enforced?: boolean;
};
/** Page Build */
export type PageBuild = {
    url: string;
    status: string;
    error: {
        message: string | null;
    };
    pusher: NullableSimpleUser;
    commit: string;
    duration: number;
    created_at: string;
    updated_at: string;
};
/** Page Build Status */
export type PageBuildStatus = {
    url: string;
    status: string;
};
/** Pages Health Check Status */
export type PagesHealthCheck = {
    domain?: {
        host?: string;
        uri?: string;
        nameservers?: string;
        dns_resolves?: boolean;
        is_proxied?: boolean | null;
        is_cloudflare_ip?: boolean | null;
        is_fastly_ip?: boolean | null;
        is_old_ip_address?: boolean | null;
        is_a_record?: boolean | null;
        has_cname_record?: boolean | null;
        has_mx_records_present?: boolean | null;
        is_valid_domain?: boolean;
        is_apex_domain?: boolean;
        should_be_a_record?: boolean | null;
        is_cname_to_github_user_domain?: boolean | null;
        is_cname_to_pages_dot_github_dot_com?: boolean | null;
        is_cname_to_fastly?: boolean | null;
        is_pointed_to_github_pages_ip?: boolean | null;
        is_non_github_pages_ip_present?: boolean | null;
        is_pages_domain?: boolean;
        is_served_by_pages?: boolean | null;
        is_valid?: boolean;
        reason?: string | null;
        responds_to_https?: boolean;
        enforces_https?: boolean;
        https_error?: string | null;
        is_https_eligible?: boolean | null;
        caa_error?: string | null;
    };
    alt_domain?: {
        host?: string;
        uri?: string;
        nameservers?: string;
        dns_resolves?: boolean;
        is_proxied?: boolean | null;
        is_cloudflare_ip?: boolean | null;
        is_fastly_ip?: boolean | null;
        is_old_ip_address?: boolean | null;
        is_a_record?: boolean | null;
        has_cname_record?: boolean | null;
        has_mx_records_present?: boolean | null;
        is_valid_domain?: boolean;
        is_apex_domain?: boolean;
        should_be_a_record?: boolean | null;
        is_cname_to_github_user_domain?: boolean | null;
        is_cname_to_pages_dot_github_dot_com?: boolean | null;
        is_cname_to_fastly?: boolean | null;
        is_pointed_to_github_pages_ip?: boolean | null;
        is_non_github_pages_ip_present?: boolean | null;
        is_pages_domain?: boolean;
        is_served_by_pages?: boolean | null;
        is_valid?: boolean;
        reason?: string | null;
        responds_to_https?: boolean;
        enforces_https?: boolean;
        https_error?: string | null;
        is_https_eligible?: boolean | null;
        caa_error?: string | null;
    } | null;
};
/** Groups of organization members that gives permissions on specified repositories. */
export type TeamSimple = {
    /** Unique identifier of the team */
    id: number;
    node_id: string;
    /** URL for the team */
    url: string;
    members_url: string;
    /** Name of the team */
    name: string;
    /** Description of the team */
    description: string | null;
    /** Permission that the team will have for its repositories */
    permission: string;
    /** The level of privacy this team should have */
    privacy?: string;
    html_url: string;
    repositories_url: string;
    slug: string;
    /** Distinguished Name (DN) that team maps to within LDAP environment */
    ldap_dn?: string;
};
/** Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push followUp commits if necessary. */
export type PullRequest = {
    url: string;
    id: number;
    node_id: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    /** Number uniquely identifying the pull request within its repository. */
    number: number;
    /** State of this Pull Request. Either `open` or `closed`. */
    state: "open" | "closed";
    locked: boolean;
    /** The title of the pull request. */
    title: string;
    user: NullableSimpleUser;
    body: string | null;
    labels: {
        id?: number;
        node_id?: string;
        url?: string;
        name?: string;
        description?: string | null;
        color?: string;
        default?: boolean;
    }[];
    milestone: NullableMilestone;
    active_lock_reason?: string | null;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    merged_at: string | null;
    merge_commit_sha: string | null;
    assignee: NullableSimpleUser;
    assignees?: SimpleUser[] | null;
    requested_reviewers?: SimpleUser[] | null;
    requested_teams?: TeamSimple[] | null;
    head: {
        label: string;
        ref: string;
        repo: {
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            description: string | null;
            downloads_url: string;
            events_url: string;
            fork: boolean;
            forks_url: string;
            full_name: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            hooks_url: string;
            html_url: string;
            id: number;
            node_id: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            name: string;
            notifications_url: string;
            owner: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string | null;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            private: boolean;
            pulls_url: string;
            releases_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            url: string;
            clone_url: string;
            default_branch: string;
            forks: number;
            forks_count: number;
            git_url: string;
            has_downloads: boolean;
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            homepage: string | null;
            language: string | null;
            master_branch?: string;
            archived: boolean;
            disabled: boolean;
            /** The repository visibility: public, private, or internal. */
            visibility?: string;
            mirror_url: string | null;
            open_issues: number;
            open_issues_count: number;
            permissions?: {
                admin: boolean;
                maintain?: boolean;
                push: boolean;
                triage?: boolean;
                pull: boolean;
            };
            temp_clone_token?: string;
            allow_merge_commit?: boolean;
            allow_squash_merge?: boolean;
            allow_rebase_merge?: boolean;
            license: {
                key: string;
                name: string;
                url: string | null;
                spdx_id: string | null;
                node_id: string;
            } | null;
            pushed_at: string;
            size: number;
            ssh_url: string;
            stargazers_count: number;
            svn_url: string;
            topics?: string[];
            watchers: number;
            watchers_count: number;
            created_at: string;
            updated_at: string;
            allow_forking?: boolean;
            is_template?: boolean;
        } | null;
        sha: string;
        user: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string | null;
            html_url: string;
            id: number;
            node_id: string;
            login: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
    };
    base: {
        label: string;
        ref: string;
        repo: {
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            description: string | null;
            downloads_url: string;
            events_url: string;
            fork: boolean;
            forks_url: string;
            full_name: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            hooks_url: string;
            html_url: string;
            id: number;
            is_template?: boolean;
            node_id: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            name: string;
            notifications_url: string;
            owner: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string | null;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
            private: boolean;
            pulls_url: string;
            releases_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            url: string;
            clone_url: string;
            default_branch: string;
            forks: number;
            forks_count: number;
            git_url: string;
            has_downloads: boolean;
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            homepage: string | null;
            language: string | null;
            master_branch?: string;
            archived: boolean;
            disabled: boolean;
            /** The repository visibility: public, private, or internal. */
            visibility?: string;
            mirror_url: string | null;
            open_issues: number;
            open_issues_count: number;
            permissions?: {
                admin: boolean;
                maintain?: boolean;
                push: boolean;
                triage?: boolean;
                pull: boolean;
            };
            temp_clone_token?: string;
            allow_merge_commit?: boolean;
            allow_squash_merge?: boolean;
            allow_rebase_merge?: boolean;
            license: NullableLicenseSimple;
            pushed_at: string;
            size: number;
            ssh_url: string;
            stargazers_count: number;
            svn_url: string;
            topics?: string[];
            watchers: number;
            watchers_count: number;
            created_at: string;
            updated_at: string;
            allow_forking?: boolean;
        };
        sha: string;
        user: {
            avatar_url: string;
            events_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string | null;
            html_url: string;
            id: number;
            node_id: string;
            login: string;
            organizations_url: string;
            received_events_url: string;
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            subscriptions_url: string;
            type: string;
            url: string;
        };
    };
    _links: {
        comments: Link;
        commits: Link;
        statuses: Link;
        html: Link;
        issue: Link;
        review_comments: Link;
        review_comment: Link;
        self: Link;
    };
    author_association: Author_association;
    auto_merge: Auto_merge;
    /** Indicates whether or not the pull request is a draft. */
    draft?: boolean;
    merged: boolean;
    mergeable: boolean | null;
    rebaseable?: boolean | null;
    mergeable_state: string;
    merged_by: NullableSimpleUser;
    comments: number;
    review_comments: number;
    /** Indicates whether maintainers can modify the pull request. */
    maintainer_can_modify: boolean;
    commits: number;
    additions: number;
    deletions: number;
    changed_files: number;
};
/** Pull Request Merge Result */
export type PullRequestMergeResult = {
    sha: string;
    merged: boolean;
    message: string;
};
/** Pull Request Review Request */
export type PullRequestReviewRequest = {
    users: SimpleUser[];
    teams: Team[];
};
/** Pull Request Reviews are reviews on pull requests. */
export type PullRequestReview = {
    /** Unique identifier of the review */
    id: number;
    node_id: string;
    user: NullableSimpleUser;
    /** The text of the review. */
    body: string;
    state: string;
    html_url: string;
    pull_request_url: string;
    _links: {
        html: {
            href: string;
        };
        pull_request: {
            href: string;
        };
    };
    submitted_at?: string;
    /** A commit SHA for the review. */
    commit_id: string;
    body_html?: string;
    body_text?: string;
    author_association: Author_association;
};
/** Legacy Review Comment */
export type ReviewComment = {
    url: string;
    pull_request_review_id: number | null;
    id: number;
    node_id: string;
    diff_hunk: string;
    path: string;
    position: number | null;
    original_position: number;
    commit_id: string;
    original_commit_id: string;
    in_reply_to_id?: number;
    user: NullableSimpleUser;
    body: string;
    created_at: string;
    updated_at: string;
    html_url: string;
    pull_request_url: string;
    author_association: Author_association;
    _links: {
        self: Link;
        html: Link;
        pull_request: Link;
    };
    body_text?: string;
    body_html?: string;
    reactions?: ReactionRollup;
    /** The side of the first line of the range for a multiLine comment. */
    side?: "LEFT" | "RIGHT";
    /** The side of the first line of the range for a multiLine comment. */
    start_side?: ("LEFT" | "RIGHT") | null;
    /** The line of the blob to which the comment applies. The last line of the range for a multiLine comment */
    line?: number;
    /** The original line of the blob to which the comment applies. The last line of the range for a multiLine comment */
    original_line?: number;
    /** The first line of the range for a multiLine comment. */
    start_line?: number | null;
    /** The original first line of the range for a multiLine comment. */
    original_start_line?: number | null;
};
/** Data related to a release. */
export type ReleaseAsset = {
    url: string;
    browser_download_url: string;
    id: number;
    node_id: string;
    /** The file name of the asset. */
    name: string;
    label: string | null;
    /** State of the release asset. */
    state: "uploaded" | "open";
    content_type: string;
    size: number;
    download_count: number;
    created_at: string;
    updated_at: string;
    uploader: NullableSimpleUser;
};
/** A release. */
export type Release = {
    url: string;
    html_url: string;
    assets_url: string;
    upload_url: string;
    tarball_url: string | null;
    zipball_url: string | null;
    id: number;
    node_id: string;
    /** The name of the tag. */
    tag_name: string;
    /** Specifies the commitish value that determines where the Git tag is created from. */
    target_commitish: string;
    name: string | null;
    body?: string | null;
    /** true to create a draft (unpublished) release, false to create a published one. */
    draft: boolean;
    /** Whether to identify the release as a prerelease or a full release. */
    prerelease: boolean;
    created_at: string;
    published_at: string | null;
    author: SimpleUser;
    assets: ReleaseAsset[];
    body_html?: string;
    body_text?: string;
    mentions_count?: number;
    /** The URL of the release discussion. */
    discussion_url?: string;
    reactions?: ReactionRollup;
};
/** Generated name and body describing a release */
export type ReleaseNotesContent = {
    /** The generated name of the release */
    name: string;
    /** The generated body describing the contents of the release supporting markdown formatting */
    body: string;
};
export type SecretScanningAlert = {
    number?: AlertNumber;
    created_at?: AlertCreatedAt;
    url?: AlertUrl;
    html_url?: AlertHtmlUrl;
    /** The REST API URL of the code locations for this alert. */
    locations_url?: string;
    state?: SecretScanningAlertState;
    resolution?: SecretScanningAlertResolution;
    /** The time that the alert was resolved in ISO 8601 format: `YYYYMMDDTHH:MM:SSZ`. */
    resolved_at?: string | null;
    resolved_by?: NullableSimpleUser;
    /** The type of secret that secret scanning detected. */
    secret_type?: string;
    /** The secret that was detected. */
    secret?: string;
};
/** Stargazer */
export type Stargazer = {
    starred_at: string;
    user: NullableSimpleUser;
};
/** Code Frequency Stat */
export type CodeFrequencyStat = number[];
/** Commit Activity */
export type CommitActivity = {
    days: number[];
    total: number;
    week: number;
};
/** Contributor Activity */
export type ContributorActivity = {
    author: NullableSimpleUser;
    total: number;
    weeks: {
        w?: number;
        a?: number;
        d?: number;
        c?: number;
    }[];
};
export type ParticipationStats = {
    all: number[];
    owner: number[];
};
/** Repository invitations let you manage who you collaborate with. */
export type RepositorySubscription = {
    /** Determines if notifications should be received from this repository. */
    subscribed: boolean;
    /** Determines if all notifications should be blocked from this repository. */
    ignored: boolean;
    reason: string | null;
    created_at: string;
    url: string;
    repository_url: string;
};
/** Tag */
export type Tag = {
    name: string;
    commit: {
        sha: string;
        url: string;
    };
    zipball_url: string;
    tarball_url: string;
    node_id: string;
};
/** A topic aggregates entities that are related to a subject. */
export type Topic = {
    names: string[];
};
export type Traffic = {
    timestamp: string;
    uniques: number;
    count: number;
};
/** Clone Traffic */
export type CloneTraffic = {
    count: number;
    uniques: number;
    clones: Traffic[];
};
/** Content Traffic */
export type ContentTraffic = {
    path: string;
    title: string;
    count: number;
    uniques: number;
};
/** Referrer Traffic */
export type ReferrerTraffic = {
    referrer: string;
    count: number;
    uniques: number;
};
/** View Traffic */
export type ViewTraffic = {
    count: number;
    uniques: number;
    views: Traffic[];
};
export type ScimGroupListEnterprise = {
    schemas: string[];
    totalResults: number;
    itemsPerPage: number;
    startIndex: number;
    Resources: {
        schemas: string[];
        id: string;
        externalId?: string | null;
        displayName?: string;
        members?: {
            value?: string;
            $ref?: string;
            display?: string;
        }[];
        meta?: {
            resourceType?: string;
            created?: string;
            lastModified?: string;
            location?: string;
        };
    }[];
};
export type ScimEnterpriseGroup = {
    schemas: string[];
    id: string;
    externalId?: string | null;
    displayName?: string;
    members?: {
        value?: string;
        $ref?: string;
        display?: string;
    }[];
    meta?: {
        resourceType?: string;
        created?: string;
        lastModified?: string;
        location?: string;
    };
};
export type ScimUserListEnterprise = {
    schemas: string[];
    totalResults: number;
    itemsPerPage: number;
    startIndex: number;
    Resources: {
        schemas: string[];
        id: string;
        externalId?: string;
        userName?: string;
        name?: {
            givenName?: string;
            familyName?: string;
        };
        emails?: {
            value?: string;
            primary?: boolean;
            type?: string;
        }[];
        groups?: {
            value?: string;
        }[];
        active?: boolean;
        meta?: {
            resourceType?: string;
            created?: string;
            lastModified?: string;
            location?: string;
        };
    }[];
};
export type ScimEnterpriseUser = {
    schemas: string[];
    id: string;
    externalId?: string;
    userName?: string;
    name?: {
        givenName?: string;
        familyName?: string;
    };
    emails?: {
        value?: string;
        type?: string;
        primary?: boolean;
    }[];
    groups?: {
        value?: string;
    }[];
    active?: boolean;
    meta?: {
        resourceType?: string;
        created?: string;
        lastModified?: string;
        location?: string;
    };
};
/** SCIM /Users provisioning endpoints */
export type ScimUser = {
    /** SCIM schema used. */
    schemas: string[];
    /** Unique identifier of an external identity */
    id: string;
    /** The ID of the User. */
    externalId: string | null;
    /** Configured by the admin. Could be an email, login, or username */
    userName: string | null;
    /** The name of the user, suitable for display to endUsers */
    displayName?: string | null;
    name: {
        givenName: string | null;
        familyName: string | null;
        formatted?: string | null;
    };
    /** user emails */
    emails: {
        value: string;
        primary?: boolean;
    }[];
    /** The active status of the User. */
    active: boolean;
    meta: {
        resourceType?: string;
        created?: string;
        lastModified?: string;
        location?: string;
    };
    /** The ID of the organization. */
    organization_id?: number;
    /** Set of operations to be performed */
    operations?: {
        op: "add" | "remove" | "replace";
        path?: string;
        value?: string | { [key: string]: unknown } | unknown[];
    }[];
    /** associated groups */
    groups?: {
        value?: string;
        display?: string;
    }[];
};
/** SCIM User List */
export type ScimUserList = {
    /** SCIM schema used. */
    schemas: string[];
    totalResults: number;
    itemsPerPage: number;
    startIndex: number;
    Resources: ScimUser[];
};
export type SearchResultTextMatches = {
    object_url?: string;
    object_type?: string | null;
    property?: string;
    fragment?: string;
    matches?: {
        text?: string;
        indices?: number[];
    }[];
}[];
/** Code Search Result Item */
export type CodeSearchResultItem = {
    name: string;
    path: string;
    sha: string;
    url: string;
    git_url: string;
    html_url: string;
    repository: MinimalRepository;
    score: number;
    file_size?: number;
    language?: string | null;
    last_modified_at?: string;
    line_numbers?: string[];
    text_matches?: SearchResultTextMatches;
};
/** Commit Search Result Item */
export type CommitSearchResultItem = {
    url: string;
    sha: string;
    html_url: string;
    comments_url: string;
    commit: {
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: NullableGitUser;
        comment_count: number;
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
        verification?: Verification;
    };
    author: NullableSimpleUser;
    committer: NullableGitUser;
    parents: {
        url?: string;
        html_url?: string;
        sha?: string;
    }[];
    repository: MinimalRepository;
    score: number;
    node_id: string;
    text_matches?: SearchResultTextMatches;
};
/** Issue Search Result Item */
export type IssueSearchResultItem = {
    url: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    id: number;
    node_id: string;
    number: number;
    title: string;
    locked: boolean;
    active_lock_reason?: string | null;
    assignees?: SimpleUser[] | null;
    user: NullableSimpleUser;
    labels: {
        id?: number;
        node_id?: string;
        url?: string;
        name?: string;
        color?: string;
        default?: boolean;
        description?: string | null;
    }[];
    state: string;
    assignee: NullableSimpleUser;
    milestone: NullableMilestone;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    text_matches?: SearchResultTextMatches;
    pull_request?: {
        merged_at?: string | null;
        diff_url: string | null;
        html_url: string | null;
        patch_url: string | null;
        url: string | null;
    };
    body?: string;
    score: number;
    author_association: Author_association;
    draft?: boolean;
    repository?: Repository;
    body_html?: string;
    body_text?: string;
    timeline_url?: string;
    performed_via_github_app?: NullableIntegration;
    reactions?: ReactionRollup;
};
/** Label Search Result Item */
export type LabelSearchResultItem = {
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
    default: boolean;
    description: string | null;
    score: number;
    text_matches?: SearchResultTextMatches;
};
/** Repo Search Result Item */
export type RepoSearchResultItem = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: NullableSimpleUser;
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    forks_count: number;
    open_issues_count: number;
    master_branch?: string;
    default_branch: string;
    score: number;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    forks: number;
    open_issues: number;
    watchers: number;
    topics?: string[];
    mirror_url: string | null;
    has_issues: boolean;
    has_projects: boolean;
    has_pages: boolean;
    has_wiki: boolean;
    has_downloads: boolean;
    archived: boolean;
    /** Returns whether or not this repository disabled. */
    disabled: boolean;
    /** The repository visibility: public, private, or internal. */
    visibility?: string;
    license: NullableLicenseSimple;
    permissions?: {
        admin: boolean;
        maintain?: boolean;
        push: boolean;
        triage?: boolean;
        pull: boolean;
    };
    text_matches?: SearchResultTextMatches;
    temp_clone_token?: string;
    allow_merge_commit?: boolean;
    allow_squash_merge?: boolean;
    allow_rebase_merge?: boolean;
    allow_auto_merge?: boolean;
    delete_branch_on_merge?: boolean;
    allow_forking?: boolean;
    is_template?: boolean;
};
/** Topic Search Result Item */
export type TopicSearchResultItem = {
    name: string;
    display_name: string | null;
    short_description: string | null;
    description: string | null;
    created_by: string | null;
    released: string | null;
    created_at: string;
    updated_at: string;
    featured: boolean;
    curated: boolean;
    score: number;
    repository_count?: number | null;
    logo_url?: string | null;
    text_matches?: SearchResultTextMatches;
    related?:
    | {
        topic_relation?: {
            id?: number;
            name?: string;
            topic_id?: number;
            relation_type?: string;
        };
    }[]
    | null;
    aliases?:
    | {
        topic_relation?: {
            id?: number;
            name?: string;
            topic_id?: number;
            relation_type?: string;
        };
    }[]
    | null;
};
/** User Search Result Item */
export type UserSearchResultItem = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    received_events_url: string;
    type: string;
    score: number;
    following_url: string;
    gists_url: string;
    starred_url: string;
    events_url: string;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
    created_at?: string;
    updated_at?: string;
    name?: string | null;
    bio?: string | null;
    email?: string | null;
    location?: string | null;
    site_admin: boolean;
    hireable?: boolean | null;
    text_matches?: SearchResultTextMatches;
    blog?: string | null;
    company?: string | null;
    suspended_at?: string | null;
};
/** Private User */
export type PrivateUser = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username?: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    private_gists: number;
    total_private_repos: number;
    owned_private_repos: number;
    disk_usage: number;
    collaborators: number;
    two_factor_authentication: boolean;
    plan?: {
        collaborators: number;
        name: string;
        space: number;
        private_repos: number;
    };
    suspended_at?: string | null;
    business_plus?: boolean;
    ldap_dn?: string;
};
/** Email */
export type Email = {
    email: string;
    primary: boolean;
    verified: boolean;
    visibility: string | null;
};
/** A unique encryption key */
export type GpgKey = {
    id: number;
    primary_key_id: number | null;
    key_id: string;
    public_key: string;
    emails: {
        email?: string;
        verified?: boolean;
    }[];
    subkeys: {
        id?: number;
        primary_key_id?: number;
        key_id?: string;
        public_key?: string;
        emails?: unknown[];
        subkeys?: unknown[];
        can_sign?: boolean;
        can_encrypt_comms?: boolean;
        can_encrypt_storage?: boolean;
        can_certify?: boolean;
        created_at?: string;
        expires_at?: string | null;
        raw_key?: string | null;
    }[];
    can_sign: boolean;
    can_encrypt_comms: boolean;
    can_encrypt_storage: boolean;
    can_certify: boolean;
    created_at: string;
    expires_at: string | null;
    raw_key: string | null;
};
/** Key */
export type Key = {
    key: string;
    id: number;
    url: string;
    title: string;
    created_at: string;
    verified: boolean;
    read_only: boolean;
};
export type MarketplaceAccount = {
    url: string;
    id: number;
    type: string;
    node_id?: string;
    login: string;
    email?: string | null;
    organization_billing_email?: string | null;
};
/** User Marketplace Purchase */
export type UserMarketplacePurchase = {
    billing_cycle: string;
    next_billing_date: string | null;
    unit_count: number | null;
    on_free_trial: boolean;
    free_trial_ends_on: string | null;
    updated_at: string | null;
    account: MarketplaceAccount;
    plan: MarketplaceListingPlan;
};
/** Starred Repository */
export type StarredRepository = {
    starred_at: string;
    repo: Repository;
};
/** Hovercard */
export type Hovercard = {
    contexts: {
        message: string;
        octicon: string;
    }[];
};
/** Key Simple */
export type KeySimple = {
    id: number;
    key: string;
};