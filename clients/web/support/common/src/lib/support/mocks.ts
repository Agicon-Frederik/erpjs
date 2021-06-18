import type { DocumentNode } from '@apollo/client/core';
import type { RequestHandler } from 'mock-apollo-client/dist/mockClient';

export interface ApolloMockDef {
    query: DocumentNode;
    mock: any;
}

export interface ApolloMock {
    query: DocumentNode;
    handler: RequestHandler;
}

export const translateMocks = (data: ApolloMockDef[]): ApolloMock[] =>
    data.map(({ query, mock }) => ({ query, handler: () => Promise.resolve(mock) }));
