import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'HomePageWebPartStrings';
import HomePage from './components/HomePage';
import { IHomePageProps } from './components/IHomePageProps';

export interface IHomePageWebPartProps {
  description: string;
  showVideoLibrary?: boolean;
}

export default class HomePageWebPart extends BaseClientSideWebPart<IHomePageWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    // Expand Workbench and SharePoint canvas to full width
    this.domElement.style.width = '100%';
    this.domElement.style.maxWidth = '100%';
    this.domElement.style.padding = '0';
    this.domElement.style.margin = '0';

    let parent: HTMLElement | null = this.domElement.parentElement;
    while (parent && parent !== document.body) {
      if (
        parent.classList.contains('CanvasZone') ||
        parent.classList.contains('CanvasSection') ||
        parent.classList.contains('ControlZone') ||
        parent.classList.contains('CanvasComponent') ||
        parent.getAttribute('data-automation-id') === 'CanvasZone' ||
        parent.getAttribute('data-automation-id') === 'CanvasSection' ||
        parent.getAttribute('data-automation-id') === 'CanvasControl' ||
        parent.id === 'workbenchPageContent'
      ) {
        parent.style.maxWidth = '100%';
        parent.style.width = '100%';
        parent.style.paddingLeft = '0';
        parent.style.paddingRight = '0';
        parent.style.marginLeft = '0';
        parent.style.marginRight = '0';
      }
      parent = parent.parentElement;
    }

    const element: React.ReactElement<IHomePageProps> = React.createElement(
      HomePage,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        userDisplayName: this.context.pageContext.user.displayName,
        showVideoLibrary: this.properties.showVideoLibrary
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneToggle('showVideoLibrary', {
                  label: 'Show Video Library',
                  checked: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
