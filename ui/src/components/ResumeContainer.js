import React, { forwardRef } from "react";
import EditableField from "./EditableField";

const ResumeContainer = forwardRef(
  ({ resumeData, editMode, onUpdateField, onFieldFocus, onFieldBlur }, ref) => {
    return (
      <div ref={ref} className="max-w-4xl mx-0 p-0 bg-transparent">
        {/* Page 1 */}
        <div className={`a4-page ${editMode ? "edit-mode-active" : ""}`}>
          {/* Header */}
          <EditableField
            tag="h1"
            field="name"
            value={resumeData.personalInfo?.name}
            onUpdate={(field, value) =>
              onUpdateField("personalInfo", field, value)
            }
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="text-center text-22pt mb-1 mt-0"
          />

          <EditableField
            tag="div"
            field="contact"
            value={resumeData.personalInfo?.contact}
            onUpdate={(field, value) =>
              onUpdateField("personalInfo", field, value)
            }
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="text-center text-10-5pt mb-1"
          />

          <EditableField
            tag="div"
            field="links"
            value={resumeData.personalInfo?.links}
            onUpdate={(field, value) =>
              onUpdateField("personalInfo", field, value)
            }
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="text-center text-10-5pt mb-1"
          />

          <hr className="border-none border-t border-gray-700 my-4" />

          {/* Experience */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Experience
          </h2>

          {resumeData.experience?.slice(0, 2).map((job, index) => (
            <div key={job.id} className="no-break">
              <p className="my-2 leading-relaxed">
                <EditableField
                  tag="span"
                  field="title"
                  value={job.title}
                  onUpdate={(field, value) =>
                    onUpdateField("experience", field, value, index)
                  }
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                  editMode={editMode}
                  className="font-bold"
                />
                <EditableField
                  tag="span"
                  field="date"
                  value={job.date}
                  onUpdate={(field, value) =>
                    onUpdateField("experience", field, value, index)
                  }
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                  editMode={editMode}
                  className="float-right italic"
                />
              </p>
              <ul className="my-1 ml-5">
                {job.descriptions?.map((desc, descIndex) => (
                  <EditableField
                    key={descIndex}
                    tag="li"
                    field={`description-${descIndex}`}
                    value={desc}
                    onUpdate={(field, value) => {
                      const newDescriptions = [...job.descriptions];
                      newDescriptions[descIndex] = value;
                      onUpdateField(
                        "experience",
                        "descriptions",
                        newDescriptions,
                        index
                      );
                    }}
                    onFocus={onFieldFocus}
                    onBlur={onFieldBlur}
                    editMode={editMode}
                    className="mb-1 leading-relaxed"
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Page 2 */}
        <div
          className={`a4-page page-break ${editMode ? "edit-mode-active" : ""}`}
        >
          {/* Continue Experience */}
          <h2 className="text-13pt mt-0 mb-2 border-b border-gray-300 pb-1">
            Experience (Continued)
          </h2>

          {resumeData.experience?.slice(2).map((job, index) => (
            <div key={job.id} className="no-break">
              <p className="my-2 leading-relaxed">
                <EditableField
                  tag="span"
                  field="title"
                  value={job.title}
                  onUpdate={(field, value) =>
                    onUpdateField("experience", field, value, index + 2)
                  }
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                  editMode={editMode}
                  className="font-bold"
                />
                <EditableField
                  tag="span"
                  field="date"
                  value={job.date}
                  onUpdate={(field, value) =>
                    onUpdateField("experience", field, value, index + 2)
                  }
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                  editMode={editMode}
                  className="float-right italic"
                />
              </p>
              <ul className="my-1 ml-5">
                {job.descriptions?.map((desc, descIndex) => (
                  <EditableField
                    key={descIndex}
                    tag="li"
                    field={`description-${descIndex}`}
                    value={desc}
                    onUpdate={(field, value) => {
                      const newDescriptions = [...job.descriptions];
                      newDescriptions[descIndex] = value;
                      onUpdateField(
                        "experience",
                        "descriptions",
                        newDescriptions,
                        index + 2
                      );
                    }}
                    onFocus={onFieldFocus}
                    onBlur={onFieldBlur}
                    editMode={editMode}
                    className="mb-1 leading-relaxed"
                  />
                ))}
              </ul>
            </div>
          ))}

          {/* Projects */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Projects
          </h2>

          {resumeData.projects?.map((project, index) => (
            <div key={project.id} className="no-break">
              <p className="my-2 leading-relaxed">
                <EditableField
                  tag="span"
                  field="title"
                  value={project.title}
                  onUpdate={(field, value) =>
                    onUpdateField("projects", field, value, index)
                  }
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                  editMode={editMode}
                  className="font-bold"
                />
                <EditableField
                  tag="span"
                  field="technologies"
                  value={project.technologies}
                  onUpdate={(field, value) =>
                    onUpdateField("projects", field, value, index)
                  }
                  onFocus={onFieldFocus}
                  onBlur={onFieldBlur}
                  editMode={editMode}
                  className="float-right italic"
                />
              </p>
              <ul className="my-1 ml-5">
                {project.descriptions?.map((desc, descIndex) => (
                  <EditableField
                    key={descIndex}
                    tag="li"
                    field={`description-${descIndex}`}
                    value={desc}
                    onUpdate={(field, value) => {
                      const newDescriptions = [...project.descriptions];
                      newDescriptions[descIndex] = value;
                      onUpdateField(
                        "projects",
                        "descriptions",
                        newDescriptions,
                        index
                      );
                    }}
                    onFocus={onFieldFocus}
                    onBlur={onFieldBlur}
                    editMode={editMode}
                    className="mb-1 leading-relaxed"
                  />
                ))}
              </ul>
            </div>
          ))}

          {/* Skills */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Skills
          </h2>
          <EditableField
            tag="p"
            field="languages"
            value={resumeData.skills?.languages}
            onUpdate={(field, value) => onUpdateField("skills", field, value)}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="my-2 leading-relaxed"
          />
          <EditableField
            tag="p"
            field="ai"
            value={resumeData.skills?.ai}
            onUpdate={(field, value) => onUpdateField("skills", field, value)}
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="my-2 leading-relaxed"
          />

          {/* Education */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Education
          </h2>
          <EditableField
            tag="p"
            field="btech"
            value={resumeData.education?.btech}
            onUpdate={(field, value) =>
              onUpdateField("education", field, value)
            }
            onFocus={onFieldFocus}
            onBlur={onFieldBlur}
            editMode={editMode}
            className="my-2 leading-relaxed"
          />

          {/* Accomplishments */}
          <h2 className="text-13pt mt-4 mb-2 border-b border-gray-300 pb-1">
            Accomplishments
          </h2>
          <ul className="my-1 ml-5">
            {resumeData.accomplishments?.map((accomplishment, index) => (
              <EditableField
                key={index}
                tag="li"
                field={`accomplishment-${index}`}
                value={accomplishment}
                onUpdate={(field, value) => {
                  const newAccomplishments = [...resumeData.accomplishments];
                  newAccomplishments[index] = value;
                  onUpdateField("accomplishments", null, newAccomplishments);
                }}
                onFocus={onFieldFocus}
                onBlur={onFieldBlur}
                editMode={editMode}
                className="mb-1 leading-relaxed"
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

ResumeContainer.displayName = "ResumeContainer";

export default ResumeContainer;
