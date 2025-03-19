import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateProblemInput = {
  createdById: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  difficulty: ProblemDifficulty;
  examples: Array<ExampleInput>;
  hints: Array<Scalars['String']['input']>;
  memoryLimitInMB: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
  solutions: Array<SolutionInput>;
  timeLimitInSeconds: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  topics: Array<Scalars['String']['input']>;
};

export type Discussion = {
  __typename?: 'Discussion';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  parent?: Maybe<Discussion>;
  problem?: Maybe<Problem>;
  problemId?: Maybe<Scalars['ID']['output']>;
  replies?: Maybe<Array<Maybe<Discussion>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type Editorial = {
  __typename?: 'Editorial';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['ID']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  problem?: Maybe<Problem>;
  problemId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type Example = {
  __typename?: 'Example';
  id: Scalars['ID']['output'];
  input?: Maybe<Scalars['String']['output']>;
  output?: Maybe<Scalars['String']['output']>;
  problemId?: Maybe<Scalars['ID']['output']>;
};

export type ExampleInput = {
  input: Scalars['String']['input'];
  output: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProblem?: Maybe<Problem>;
  updateProfile?: Maybe<User>;
};


export type MutationCreateProblemArgs = {
  input?: InputMaybe<CreateProblemInput>;
};


export type MutationUpdateProfileArgs = {
  input?: InputMaybe<UpdateProfileInput>;
};

export type Problem = {
  __typename?: 'Problem';
  acceptedSubmissions?: Maybe<Scalars['Int']['output']>;
  bookmarks?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<ProblemDifficulty>;
  discussions?: Maybe<Array<Maybe<Discussion>>>;
  dislikes?: Maybe<Scalars['Int']['output']>;
  editorial?: Maybe<Editorial>;
  examples?: Maybe<Array<Maybe<Example>>>;
  hints?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  memoryLimitInMB?: Maybe<Scalars['Int']['output']>;
  publishedSolutions?: Maybe<Array<Maybe<PublishedSolution>>>;
  slug?: Maybe<Scalars['String']['output']>;
  solutions?: Maybe<Array<Maybe<Solution>>>;
  submissions?: Maybe<Array<Maybe<Submission>>>;
  timeLimitInSeconds?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  totalSubmissions?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export enum ProblemDifficulty {
  Easy = 'EASY',
  Hard = 'HARD',
  Medium = 'MEDIUM'
}

export type PublishedSolution = {
  __typename?: 'PublishedSolution';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dislikes?: Maybe<Scalars['Int']['output']>;
  explanation?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  likes?: Maybe<Scalars['Int']['output']>;
  problem?: Maybe<Problem>;
  problemId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type Session = {
  __typename?: 'Session';
  createdAt?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type Solution = {
  __typename?: 'Solution';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  problemId?: Maybe<Scalars['ID']['output']>;
};

export type SolutionInput = {
  code: Scalars['String']['input'];
  language: Scalars['String']['input'];
};

export type Status = {
  __typename?: 'Status';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Submission = {
  __typename?: 'Submission';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  problemId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Status>;
  statusId?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type UpdateProfileInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  sessions?: Maybe<Array<Maybe<Session>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateProblemInput: CreateProblemInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Discussion: ResolverTypeWrapper<Discussion>;
  Editorial: ResolverTypeWrapper<Editorial>;
  Example: ResolverTypeWrapper<Example>;
  ExampleInput: ExampleInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Problem: ResolverTypeWrapper<Problem>;
  ProblemDifficulty: ProblemDifficulty;
  PublishedSolution: ResolverTypeWrapper<PublishedSolution>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  Session: ResolverTypeWrapper<Session>;
  Solution: ResolverTypeWrapper<Solution>;
  SolutionInput: SolutionInput;
  Status: ResolverTypeWrapper<Status>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Submission: ResolverTypeWrapper<Submission>;
  UpdateProfileInput: UpdateProfileInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateProblemInput: CreateProblemInput;
  DateTime: Scalars['DateTime']['output'];
  Discussion: Discussion;
  Editorial: Editorial;
  Example: Example;
  ExampleInput: ExampleInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Problem: Problem;
  PublishedSolution: PublishedSolution;
  Query: {};
  Session: Session;
  Solution: Solution;
  SolutionInput: SolutionInput;
  Status: Status;
  String: Scalars['String']['output'];
  Submission: Submission;
  UpdateProfileInput: UpdateProfileInput;
  User: User;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DiscussionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discussion'] = ResolversParentTypes['Discussion']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Discussion']>, ParentType, ContextType>;
  problem?: Resolver<Maybe<ResolversTypes['Problem']>, ParentType, ContextType>;
  problemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discussion']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditorialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Editorial'] = ResolversParentTypes['Editorial']> = {
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  problem?: Resolver<Maybe<ResolversTypes['Problem']>, ParentType, ContextType>;
  problemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExampleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Example'] = ResolversParentTypes['Example']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  input?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  output?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  problemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createProblem?: Resolver<Maybe<ResolversTypes['Problem']>, ParentType, ContextType, Partial<MutationCreateProblemArgs>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUpdateProfileArgs>>;
};

export type ProblemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Problem'] = ResolversParentTypes['Problem']> = {
  acceptedSubmissions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bookmarks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdById?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['ProblemDifficulty']>, ParentType, ContextType>;
  discussions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discussion']>>>, ParentType, ContextType>;
  dislikes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  editorial?: Resolver<Maybe<ResolversTypes['Editorial']>, ParentType, ContextType>;
  examples?: Resolver<Maybe<Array<Maybe<ResolversTypes['Example']>>>, ParentType, ContextType>;
  hints?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  memoryLimitInMB?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publishedSolutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['PublishedSolution']>>>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Solution']>>>, ParentType, ContextType>;
  submissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Submission']>>>, ParentType, ContextType>;
  timeLimitInSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topics?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  totalSubmissions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublishedSolutionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublishedSolution'] = ResolversParentTypes['PublishedSolution']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dislikes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  explanation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  problem?: Resolver<Maybe<ResolversTypes['Problem']>, ParentType, ContextType>;
  problemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type SessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionToken?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SolutionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Solution'] = ResolversParentTypes['Solution']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  problemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubmissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Submission'] = ResolversParentTypes['Submission']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  problemId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  statusId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  sessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Discussion?: DiscussionResolvers<ContextType>;
  Editorial?: EditorialResolvers<ContextType>;
  Example?: ExampleResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Problem?: ProblemResolvers<ContextType>;
  PublishedSolution?: PublishedSolutionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  Solution?: SolutionResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
  Submission?: SubmissionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

