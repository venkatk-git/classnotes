export type SideBarDocsNavItemType = {
    title: string;
    href: string;
    items: [];
}[];

export type TopicInfo = {
    title: string;
    href: string;
    items: TopicInfo[];
    next: string;
    prev: string;
};
