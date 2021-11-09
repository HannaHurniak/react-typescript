import React from 'react';

import styles from './styles.module.scss';

import { CreatePostProps } from '../../../interface/interface';

import Header from '../../../common components/Header/container/headerContainer';
import NewBlock from './NewBlock';

const CreatePost: React.FC<CreatePostProps>= ({ blocks, 
    handleAddNewBlock, handleBlockDelete, 
    handleClickTag, tags, handleChange, title, 
    image, handleImageChange, handleDeleteImage,
    createNewPost, errorMessage }) => {
        return (
            <>
                <Header />
                <article>
                    <div className={styles.wrapper_create_post}>     
                        <form>
                            {image ?
                                <div className={styles.wrapper_image}>
                                    <div>
                                        <img src={image} alt="load-image" id="load-image" className={styles.image} />
                                    </div>
                                    <button className={styles.delete_image}
                                        onClick={handleDeleteImage}
                                    >Delete image</button>
                                </div> :

                                <div className={styles.form__add_image}>
                                    <label>
                                        <span>+ Add cover</span>
                                        <input 
                                            type="file" 
                                            name="image" 
                                            accept="image/*" 
                                            required 
                                            onChange={handleImageChange}
                                            />
                                    </label>
                                </div>
                            }
        
                            <div className={styles.form__title}>
                                <label htmlFor="title">
                                    Enter the title of your article
                                </label>
                                <input
                                    value={title}
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter Title"
                                    required
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                            
                            <div className={styles.form__group_fields}>
                                {blocks.map((block, index) => <NewBlock 
                                    blocks={blocks}
                                    key={index}
                                    id={index}
                                    valueSubtitle={block.subtitles}
                                    valueTextarea={block.textarea}
                                    handleChange={handleChange}
                                    onRemove={() => handleBlockDelete(index)} 
                                    />)}
                            </div>
                        </form>
        
                        <button className={styles.add_new_block} 
                            onClick={handleAddNewBlock}
                        >
                            + Add new block
                        </button>
        
                        <div className={styles.add_tags_info}>
                            <p>Add tag information</p>
                            <div className={styles.articles__tags}>
                                {tags.map((tag, index) => 
                                    <button 
                                        className={`${tag.click === true ? styles.tagActive : styles.tag}`} 
                                        key={tag.name} 
                                        onClick={() => handleClickTag(index)}
                                    >
                                        {tag.name}
                                    </button>)
                                }
                            </div>
                        </div>
                        <div className={styles.error}>{errorMessage}</div>
                    
                    </div>

                </article>
                    <div className={styles.buttons_for_post}>
                        <div className={styles.wrapper_create_post}>
                            <button className={styles.cancel_post}>Cancel</button>
                            <button className={styles.publish_post} 
                                type="submit" 
                                form="post"
                                onClick={createNewPost}
                                >
                                Publish
                            </button>
                        </div> 
                    </div>
            </>
        )
}

export default CreatePost;