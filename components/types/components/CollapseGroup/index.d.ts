export declare class CollapseGroup {
    private collapsiblePanels?;
    el: HTMLElement;
    isAccordion: boolean;
    componentWillLoad(): void;
    onCollapseOpened(e: CustomEvent): void;
    render(): any;
}
