import type {NodeReferenceValue} from '@_linked/core/utils/NodeReference';
import {createNameSpace} from '@_linked/core/utils/NameSpace';
import {loadOntologyFiles} from '@_linked/core/ontology/loadOntologyFiles';

/**
 * Read this ontology's data (Turtle, `src/data/ontology-check-1.ttl`) on the server. `linked build`
 * copies it to `lib/esm/data/`, so the path relative to this module holds in both trees.
 */
export var loadData = () => loadOntologyFiles(import.meta.url, ['../data/ontology-check-1.ttl']);

/**
 * The namespace of this ontology, which can be used to create NamedNodes with IRIs not listed in this file
 */
export var ns = createNameSpace('https://ontology-check.id.create.now/ont/ontology-check-1/');

/**
 * A reference to the ontology itself.
 */
export var _self: NodeReferenceValue = ns('');

//Every class and property of this ontology, each exported as a node reference.
// export var ExampleClass: NodeReferenceValue = ns('ExampleClass');
// export var exampleProperty: NodeReferenceValue = ns('exampleProperty');

//An extra grouping object so all the entities can be accessed from the prefix/name
export const ontologyCheck1 = {
  // ExampleClass,
  // exampleProperty,
};

//Registration lives in ontology-check-1.register.ts — see the comment there.
