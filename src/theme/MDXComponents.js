import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
    ...MDXComponents,
    icon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
};